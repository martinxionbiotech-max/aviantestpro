// Generate Markdown sidecars for aviantestpro.com (main site)
//
// Runs after `astro build` (wired via astro.config.mjs integration hook).
// Reads dist/sitemap-0.xml (emitted by @astrojs/sitemap), extracts the main
// content container of each page, converts it to Markdown with turndown,
// and writes:
//   dist/<route>/index.md          sidecar next to each index.html
//   dist/_md/manifest.json         public URL -> .md asset map (no-slash keys)
//
// Exit code is non-zero on critical errors (missing sitemap, no pages
// generated, manifest/asset integrity failures) so the build fails loudly.

import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const DIST = fileURLToPath(new URL("../dist/", import.meta.url));
const SITE_ORIGIN = "https://aviantestpro.com";

const td = new TurndownService({
  headingStyle: "atx",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "_",
  hr: "---",
});
td.use(gfm);
td.remove(["script", "style", "svg", "noscript", "button", "form", "iframe", "nav", "footer", "header"]);

// ---------------------------------------------------------------------------
// Content extraction
// ---------------------------------------------------------------------------

function extractMainContent(html) {
  let m = html.match(/<article[^>]*class="[^"]*page-content[^"]*"[^>]*>([\s\S]*?)<\/article>/i);
  if (!m) m = html.match(/<main[^>]*id="main"[^>]*>([\s\S]*?)<\/main>/i);
  if (!m) m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return m ? m[1] : null;
}

function parseSitemapUrls(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) urls.push(m[1]);
  return urls;
}

function urlPathToHtmlFile(url) {
  const u = new URL(url);
  if (u.origin !== SITE_ORIGIN) return null;
  // Filesystem paths are decoded; manifest keys stay percent-encoded to
  // match the request URL.pathname in the middleware.
  let p = decodeURIComponent(u.pathname);
  if (p.endsWith("/")) p = p.slice(0, -1) || "/";
  return path.join(DIST, p, "index.html");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export async function generate({ distDir = DIST, origin = SITE_ORIGIN } = {}) {
  const sitemapPath = path.join(distDir, "sitemap-0.xml");
  let xml;
  try {
    xml = await readFile(sitemapPath, "utf8");
  } catch {
    throw new Error(`[generate-md] missing sitemap: ${sitemapPath}`);
  }

  const urls = parseSitemapUrls(xml).filter((u) => u.startsWith(origin));
  if (urls.length === 0) throw new Error("[generate-md] sitemap contains no site URLs");

  const manifest = {};
  let generated = 0;
  const warnings = [];

  for (const url of urls) {
    const htmlFile = urlPathToHtmlFile(url);
    if (!htmlFile) {
      warnings.push(`skipped (off-site URL): ${url}`);
      continue;
    }

    let html;
    try {
      html = await readFile(htmlFile, "utf8");
    } catch {
      warnings.push(`skipped (HTML missing): ${url}`);
      continue;
    }

    const content = extractMainContent(html);
    if (!content || content.trim().length === 0) {
      warnings.push(`skipped (no content container): ${url}`);
      continue;
    }

    const md = td.turndown(content)
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim() + "\n";

    const mdFile = htmlFile.replace(/\.html$/, ".md");
    await mkdir(path.dirname(mdFile), { recursive: true });
    await writeFile(mdFile, md, "utf8");

    const u = new URL(url);
    // Manifest keys use the raw (percent-encoded) pathname so they match
    // `url.pathname` in the middleware exactly.
    let p = u.pathname;
    if (p.endsWith("/")) p = p.slice(0, -1) || "/";
    manifest[p] = (p === "/" ? "" : p) + "/index.md";
    generated++;
  }

  // Integrity: every manifest entry must point to an existing file.
  // Manifest values are percent-encoded (to match request pathnames), so
  // decode before hitting the filesystem.
  for (const [route, rel] of Object.entries(manifest)) {
    try {
      await stat(path.join(distDir, decodeURIComponent(rel)));
    } catch {
      throw new Error(`[generate-md] manifest integrity failure: ${route} -> ${rel} missing`);
    }
  }

  const mdDir = path.join(distDir, "_md");
  await mkdir(mdDir, { recursive: true });
  await writeFile(
    path.join(mdDir, "manifest.json"),
    JSON.stringify(manifest, null, 2) + "\n",
    "utf8"
  );

  console.log(
    `[generate-md] sitemap=${urls.length} generated=${generated} skipped=${warnings.length}`
  );
  if (warnings.length > 0) {
    for (const w of warnings.slice(0, 10)) console.log(`[generate-md] warn: ${w}`);
    if (warnings.length > 10) console.log(`[generate-md] ... ${warnings.length - 10} more warnings`);
  }
  if (generated === 0) throw new Error("[generate-md] no Markdown pages generated");
  return { urls: urls.length, generated, warnings };
}

// Allow direct execution: node scripts/generate-md.mjs
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  generate().catch((err) => {
    console.error(`[generate-md] FAILED: ${err.message}`);
    process.exit(1);
  });
}
