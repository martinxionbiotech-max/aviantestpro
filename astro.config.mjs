import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aviantestpro.com',
  output: 'static',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('dna-testing-for-parrot-gender-accurate-fast-and-scalable-solutions-from-seno-laboratory'),
    }),
  ],
});
