// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hellodulce.com',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (p) => !p.includes('/404') })],
  adapter: vercel(),
});
