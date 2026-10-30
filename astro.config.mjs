import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

function mdNegotiation() {
  return {
    name: 'md-negotiation',
    hooks: {
      'astro:build:done': async ({ logger }) => {
        const { generate } = await import('./scripts/generate-md.mjs');
        try {
          const r = await generate();
          logger.info(`[md-negotiation] ${r.generated} Markdown pages generated`);
        } catch (err) {
          logger.error(`[md-negotiation] ${err.message}`);
          throw err;
        }
      },
    },
  };
}

export default defineConfig({
  site: 'https://aviantestpro.com',
  output: 'static',
  build: { format: 'directory' },
  integrations: [
    sitemap(),
    mdNegotiation(),
  ],
});
