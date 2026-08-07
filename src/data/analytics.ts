/**
 * Analytics configuration and the event vocabulary for hellodulce.com.
 *
 * One list, one place. Every event name the site can send is declared here so
 * the GA4 property never accumulates near-duplicate names ("cta-click",
 * "ctaClick", "click_cta") that make reports unjoinable later.
 *
 * Naming rules, matching GA4 convention:
 *   snake_case, past-or-plain verb, object first  ->  cta_click, audio_complete
 *   parameters describe the *instance*, never the person
 *
 * Privacy stance: this site is aimed at people who are already nervous about
 * institutions. Nothing here records what anyone typed, listened to about
 * themselves, or who they are — only which components were used, how far, and
 * in which language. See NEVER_SEND below.
 */

/** GA4 measurement ID. Overridable per-environment without a code change. */
export const GA_ID = import.meta.env.PUBLIC_GA_ID || 'G-LQVSHTVP6Z';

/**
 * Hosts allowed to send hits. Deliberately not "any non-localhost": Vercel
 * preview deploys and my own screenshot/QA runs would otherwise pollute the
 * property with traffic that looks real but isn't.
 */
export const SEND_ON_HOSTS = ['hellodulce.com', 'www.hellodulce.com'];

export const EVENTS = {
  /** Click on any link pointing at the app (bonjour.hellodulce.com). The one
   *  that matters commercially — mark as a key event in GA. */
  ctaClick: 'cta_click',
  /** Click on an external link that is NOT the app (citations in guides). */
  outboundClick: 'outbound_click',
  /** Internal navigation from the header, footer, or a use-case card. */
  navClick: 'nav_click',
  /** Use-case card or tile opened from a listing page. */
  useCaseClick: 'use_case_click',

  /** Animated call simulator. */
  demoStart: 'demo_start',
  demoComplete: 'demo_complete',
  demoReplay: 'demo_replay',

  /** The real recorded sample call. */
  audioPlay: 'audio_play',
  audioProgress: 'audio_progress',
  audioComplete: 'audio_complete',

  /** A FAQ <details> opened. */
  faqOpen: 'faq_open',
  /** Header language switcher used. */
  languageSwitch: 'language_switch',
  /** Scroll milestones: 25 / 50 / 75 / 90. */
  scrollDepth: 'scroll_depth',
  /** Guide actually read: 75% scrolled AND 45s on page. */
  guideEngaged: 'guide_engaged',
  /** Any page held for 30s with interaction — separates readers from bounces. */
  engagedSession: 'engaged_session',
} as const;

/** Custom dimensions to register in GA4 (Admin -> Custom definitions).
 *  Without registering these, the params arrive but stay unreportable. */
export const CUSTOM_DIMENSIONS = [
  'page_domain', // 'site' | 'app' — one GA property covers both
  'content_locale', // 'en' | 'fr-CA'
  'page_type', // home | how_it_works | use_case | guide | faq | meet_dulce | ...
  'cta_location', // hero | nav | footer | section | use_case | guide_end
  'cta_label',
  'use_case', // schools | healthcare | ...
  'demo_id',
  'audio_id',
  'percent', // scroll_depth / audio_progress milestone
  'question', // FAQ question opened
  'from_locale',
  'to_locale',
  'link_domain', // outbound_click
] as const;

/** Things that must never be sent, in any event, ever. Documented because the
 *  temptation grows as soon as someone asks "but who clicked?". */
export const NEVER_SEND = [
  'phone numbers (the caller\'s or the callee\'s)',
  'anything typed into the app',
  'names, addresses, or a child\'s school',
  'full IP addresses (GA4 truncates; do not defeat it)',
  'user IDs that survive across devices',
] as const;

/** Page type from a path — keeps reporting groupable across both locales. */
export function pageType(path: string): string {
  const p = path.replace(/\/$/, '') || '/';
  const bare = p.replace(/^\/fr/, '') || '/';
  if (bare === '/') return 'home';
  if (bare === '/how-it-works' || bare === '/fonctionnement') return 'how_it_works';
  if (bare === '/use-cases' || bare === '/cas-dutilisation') return 'use_cases_index';
  if (bare.startsWith('/use-cases/') || bare.startsWith('/cas-dutilisation/')) return 'use_case';
  if (bare === '/meet-dulce' || bare === '/rencontrer-dulce') return 'meet_dulce';
  if (bare === '/faq') return 'faq';
  if (bare === '/blog' || bare === '/guides') return 'blog_index';
  if (bare.startsWith('/blog/') || bare.startsWith('/guides/')) return 'guide';
  if (bare === '/404') return 'not_found';
  return 'other';
}
