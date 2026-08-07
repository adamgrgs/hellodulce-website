/** One route map for both locales. This single object drives the language
 *  switcher, the reciprocal hreflang tags, the sitemap alternates and in-page
 *  links. Localized slugs are safe because the mapping is table-driven.
 *  Every path is stored without a trailing slash except the roots. */

export type Locale = 'en' | 'fr';
export const LOCALES: Locale[] = ['en', 'fr'];
export const DEFAULT_LOCALE: Locale = 'en';
/** BCP-47 tags used in hreflang, <html lang> and og:locale. */
export const HREFLANG: Record<Locale, string> = { en: 'en', fr: 'fr-CA' };
export const OG_LOCALE: Record<Locale, string> = { en: 'en_US', fr: 'fr_CA' };

/** Static pages. Keys are stable ids; never reference a raw path elsewhere. */
export const ROUTES = {
  home: { en: '/', fr: '/fr' },
  howItWorks: { en: '/how-it-works', fr: '/fr/fonctionnement' },
  useCases: { en: '/use-cases', fr: '/fr/cas-dutilisation' },
  meetDulce: { en: '/meet-dulce', fr: '/fr/rencontrer-dulce' },
  faq: { en: '/faq', fr: '/fr/faq' },
  blog: { en: '/blog', fr: '/fr/guides' },
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Use-case slug per locale. English slug is the canonical internal key. */
export const USE_CASE_SLUGS: Record<string, Record<Locale, string>> = {
  schools: { en: 'schools', fr: 'ecoles' },
  healthcare: { en: 'healthcare', fr: 'sante' },
  housing: { en: 'housing', fr: 'logement' },
  'customer-service': { en: 'customer-service', fr: 'service-client' },
  government: { en: 'government', fr: 'services-publics' },
  'elderly-care': { en: 'elderly-care', fr: 'aider-ses-parents' },
};

/** Blog slug per locale. The French markdown files live in content/blog/fr/. */
export const BLOG_SLUGS: Record<string, Record<Locale, string>> = {
  'phone-interpreter-services-explained': {
    en: 'phone-interpreter-services-explained',
    fr: 'services-interpretation-telephonique',
  },
  'language-barrier-in-healthcare': {
    en: 'language-barrier-in-healthcare',
    fr: 'barriere-linguistique-en-sante',
  },
  'call-your-childs-school-in-quebec': {
    en: 'call-your-childs-school-in-quebec',
    fr: 'appeler-ecole-enfant-quebec',
  },
};

const trim = (p: string) => (p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p);

export function routePath(key: RouteKey, locale: Locale): string {
  return trim(ROUTES[key][locale]);
}

export function useCasePath(enSlug: string, locale: Locale): string {
  const slug = USE_CASE_SLUGS[enSlug]?.[locale] ?? enSlug;
  return `${routePath('useCases', locale)}/${slug}`;
}

export function blogPath(enSlug: string, locale: Locale): string {
  const slug = BLOG_SLUGS[enSlug]?.[locale] ?? enSlug;
  return `${routePath('blog', locale)}/${slug}`;
}

/** Content-collection entry id for a post in a given locale. */
export function blogEntryId(enSlug: string, locale: Locale): string {
  return locale === 'en' ? enSlug : `fr/${BLOG_SLUGS[enSlug][locale]}`;
}

/** English slug behind a French blog entry id (or an English one). */
export function blogEnSlug(entryId: string): string {
  const bare = entryId.replace(/^fr\//, '');
  if (!entryId.startsWith('fr/')) return bare;
  const hit = Object.entries(BLOG_SLUGS).find(([, v]) => v.fr === bare);
  return hit ? hit[0] : bare;
}

/** Both-locale alternates for any page, ready for hreflang + sitemap. */
export type Alternates = Record<Locale, string>;

export const altForRoute = (key: RouteKey): Alternates => ({
  en: routePath(key, 'en'),
  fr: routePath(key, 'fr'),
});

export const altForUseCase = (enSlug: string): Alternates => ({
  en: useCasePath(enSlug, 'en'),
  fr: useCasePath(enSlug, 'fr'),
});

export const altForBlog = (enSlug: string): Alternates => ({
  en: blogPath(enSlug, 'en'),
  fr: blogPath(enSlug, 'fr'),
});
