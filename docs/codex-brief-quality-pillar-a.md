# Codex brief — Pillar 11: avian laboratory quality & validation (part A)

Repository: `/home/ubuntu/work/aviantestpro` (Astro 5, static, `main`). English site for a bird DNA testing
laboratory. Existing article pages are flat `.astro` files with a `page` object and one `articleHtml` string.
Do not introduce a content collection, new dependencies, or a new layout.

## Scope for this run

Create **only the pillar page** and the two discovery links below. Do NOT create the ten cluster pages yet;
part B and C will add them.

Files to create:
- `src/pages/avian-testing-laboratory-quality-validation/index.astro`

Files to edit (only these):
- `src/components/Footer.astro` — add one link under "Knowledge Centers":
  `<a href="/avian-testing-laboratory-quality-validation/">Laboratory quality &amp; validation</a>`
- `public/llms.txt` — add a `## Laboratory quality & validation` section listing the pillar and, below it,
  a note that the ten supporting guides are linked from the pillar. Do not invent cluster URLs that do not
  exist yet; list the pillar only in this run.

## Page specification

- URL: `/avian-testing-laboratory-quality-validation/`
- H1: `Avian Testing Laboratory Quality & Validation`
- `<title>`: `Avian Testing Laboratory Quality & PCR Validation | SENO` (58 chars; keep <=60)
- Description: 140–155 characters, e.g. "How to evaluate avian DNA testing laboratories: PCR assay
  validation, controls, sample traceability, reports, accreditation and supplier evidence." (verify length)
- `ogType="article"`, author `SENO Avian Genetic Test`, `datePublished="2026-11-22"`, `dateModified="2026-11-22"`.
- Canonical: `/avian-testing-laboratory-quality-validation/`.
- 3,700–4,300 rendered words (measure `<main>` after build). Do not pad with generic filler.
- 14–18 H2 sections, at least 4 tables, and one `## Scenario:` section plus a second shorter scenario or
  decision walk-through.
- Internal links: `/bird-dna-test-accuracy-validation/`, `/avian-virus-rt-pcr-test/`, `/faq/`, `/about-us/`,
  `/contact/`, and `https://data.aviantestpro.com/quality-control/lab-workflow/`. Keep them contextual.
- No FAQPage schema. Article + BreadcrumbList are emitted automatically by `BaseLayout`. Do not pass `jsonLd`.

## Content structure (rewrite in original prose; do not copy the supplied brief verbatim)

Start with a concrete buyer situation, not a definition. Then cover:

1. What a reliable laboratory actually is: a system of method, validation, controls, sample handling,
   traceability, data review, reporting and quality management — not an instrument or a logo.
2. How to evaluate an avian DNA testing laboratory: scope, species/sample fit, method suitability, controls,
   traceability, reporting, failure handling, accreditation scope, quality system, support. Include a
   decision table.
3. PCR assay validation: intended use, analytical performance (sensitivity, specificity, precision,
   repeatability, reproducibility, robustness, detection limit, interference), sample-specific validation,
   acceptance criteria, validation record. Explain what validation does *not* prove.
4. Analytical vs diagnostic sensitivity: define both, give the TP/(TP+FN) formula, explain why a strong
   analytical result does not establish diagnostic performance, and what variables affect diagnostic
   sensitivity.
5. Controls: positive, negative, no-template, extraction, internal; a comparison table; why one control
   cannot cover every failure; acceptance criteria and invalid runs.
6. Sample traceability and chain of custody: identifiers, receipt, processing records, data association;
   distinguish traceability, chain of custody, identification and data traceability; when formal custody
   matters.
7. Failed/inconclusive/invalid tests: failure categories, investigation sequence, corrective action,
   communication. State that a failed test is not proof of an unreliable laboratory.
8. Reports: essential elements, result terminology (Detected/Not detected/Valid/Invalid/Inconclusive),
   method information, limitations, report integrity.
9. Accreditation vs quality management certification: ISO/IEC 17025 vs ISO 9001, scope dependence, what a
   certificate does and does not prove, how to read an accreditation scope.
10. Supplier evaluation for kits/reagents/services: documentation, technical consistency, lot consistency,
    support, claims and evidence categories, a 10-row evaluation table.
11. High-volume testing: standardised workflows, identification systems, batch QC, contamination control,
    data review, performance indicators (invalid rate, repeat rate, rejection rate, control failures, TAT,
    corrections, complaints). High throughput is not quality.
12. Evidence of credibility: claim-to-evidence table; proficiency testing/interlaboratory comparison and its
    limits; current/scope/species/sample/use questions.
13. How quality affects reliability across the workflow: sample → method → QC/validation → data review →
    report; a weak stage propagates.
14. Practical questions to ask before choosing a laboratory (capability, validation, QC, sample management,
    reporting, credentials, support).
15. A short "What we would do" stance block: what evidence we would request first, why, and when we would
    walk away. 80–110 words, first-person plural, with one explicit exception.
16. FAQ: 10–12 real questions with answers 110+ characters. Use H2/H3; do not add FAQPage schema.
17. Sources: 3–5 links. Use only verified official/standards pages:
    `https://www.iso.org/ISO-IEC-17025-testing-and-calibration-laboratories.html`,
    `https://www.iso.org/standard/66912.html`,
    `https://www.iso.org/quality-management/`,
    `https://www.aavld.org/accreditation-requirements`,
    `https://data.aviantestpro.com/quality-control/lab-workflow/`.

## Originality / AI-trace rules (hard)

- Do not copy sentences from the supplied brief. Rebuild each section around a buyer decision.
- No `delve`, `landscape`, `crucial`, `comprehensive guide`, `in today's`, `it is important to note`,
  `moreover`, `furthermore`, `not only ... but also`, `unlock`, `seamless`, `cutting-edge`.
- Vary sentence length and paragraph openings. Avoid a bullet list in every section; use prose, tables and
  numbered decision steps where they fit.
- At least one section must state a limitation or a reason the buyer should *not* trust a claim.
- No fabricated numbers, accuracy rates, sensitivity percentages, customer names, certificate numbers,
  accreditation status, or claims about SENO's own laboratory. This page explains how to evaluate; it does
  not assert that any named laboratory, including SENO, holds a particular accreditation or validation.
- Say "ask for the certificate and scope" rather than implying the site holds one.
- No medical or treatment advice; this is laboratory quality, not diagnosis.
- English only. No Chinese characters.

## Page template (follow the existing site pattern)

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const page = {
  title: "Avian Testing Laboratory Quality & PCR Validation | SENO",
  h1: "Avian Testing Laboratory Quality & Validation",
  description: "...",
  canonical: "/avian-testing-laboratory-quality-validation/",
  author: "SENO Avian Genetic Test",
  date: "November 22, 2026",
};
const articleHtml = `<p>...</p>
<h2>...</h2>...`;
---
<BaseLayout title={page.title} description={page.description} canonical={page.canonical} ogType="article" author={page.author} datePublished="2026-11-22" dateModified="2026-11-22">
  <article class="page-content">
    <h1 class="page-title">{page.h1}</h1>
    <div class="entry-meta">By SENO Avian Genetic Test <span>/ Published November 22, 2026</span></div>
    <div class="entry-content" set:html={articleHtml} />
  </article>
</BaseLayout>
```

Use a backtick template literal for `articleHtml`; do not put a backtick or `${` inside the content.
Tables use `<table><thead><tbody>`. Keep headings descriptive, not keyword-stuffed.

## Verification (print output)

```bash
npm run build
python3 - <<'PY'
import re,html
p='dist/avian-testing-laboratory-quality-validation/index.html'
t=open(p,encoding='utf-8').read(); b=re.search(r'<main[^>]*>(.*?)</main>',t,re.S).group(1)
print('words',len(html.unescape(re.sub(r'<[^>]+>',' ',b)).split()),'h2',len(re.findall(r'<h2',b)),'tables',len(re.findall(r'<table',b)))
print('title_len',len(html.unescape(re.search(r'<title>(.*?)</title>',t,re.S).group(1))))
print('desc_len',len(html.unescape(re.search(r'name="description" content="(.*?)"',t,re.S).group(1))))
print('cjk',len(re.findall(r'[\u4e00-\u9fff]',b)))
PY
```

Report word count, H2 count, table count, title/description lengths, and the files changed. Do not commit.
