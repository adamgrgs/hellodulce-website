// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://hellodulce.com';

/** en path -> fr path. Mirrors src/data/i18n.ts; kept literal here because the
 *  sitemap `serialize` hook runs outside the TS module graph. */
const EN_TO_FR = {
  '/': '/fr',
  '/how-it-works': '/fr/fonctionnement',
  '/use-cases': '/fr/cas-dutilisation',
  '/meet-dulce': '/fr/rencontrer-dulce',
  '/faq': '/fr/faq',
  '/blog': '/fr/guides',
  '/use-cases/schools': '/fr/cas-dutilisation/ecoles',
  '/use-cases/healthcare': '/fr/cas-dutilisation/sante',
  '/use-cases/housing': '/fr/cas-dutilisation/logement',
  '/use-cases/customer-service': '/fr/cas-dutilisation/service-client',
  '/use-cases/government': '/fr/cas-dutilisation/services-publics',
  '/use-cases/elderly-care': '/fr/cas-dutilisation/aider-ses-parents',
  '/blog/phone-interpreter-services-explained': '/fr/guides/services-interpretation-telephonique',
  '/blog/language-barrier-in-healthcare': '/fr/guides/barriere-linguistique-en-sante',
  '/blog/call-your-childs-school-in-quebec': '/fr/guides/appeler-ecole-enfant-quebec',
};
const FR_TO_EN = Object.fromEntries(Object.entries(EN_TO_FR).map(([en, fr]) => [fr, en]));

const abs = (p) => new URL(p === '/' ? '/' : `${p}/`, SITE).href;
/** '/fr/faq/' -> '/fr/faq' */
const norm = (url) => {
  const p = new URL(url).pathname;
  return p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p;
};

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (p) => !p.includes('/404'),
      serialize(item) {
        const path = norm(item.url);
        const pair = EN_TO_FR[path] ? [path, EN_TO_FR[path]] : FR_TO_EN[path] ? [FR_TO_EN[path], path] : null;
        if (pair) {
          const [en, fr] = pair;
          item.links = [
            { lang: 'en', url: abs(en) },
            { lang: 'fr-CA', url: abs(fr) },
            { lang: 'x-default', url: abs(en) },
          ];
        }
        return item;
      },
    }),
  ],
  adapter: vercel(),
});
