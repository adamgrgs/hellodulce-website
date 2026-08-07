import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, APP_URL, CORE_QA, USE_CASES, STEPS, FACTS } from '../../data/site';

export const prerender = true;

/** Machine-readable description of the product and the site, for AI agents and
 *  crawlers that would rather read JSON than parse HTML. Stable shape: bump
 *  `version` if a field changes meaning. */
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );

  const payload = {
    version: 1,
    generated: new Date().toISOString(),
    product: {
      name: SITE.name,
      tagline: SITE.tagline,
      summary: SITE.blurb,
      category: 'AI phone-call interpretation',
      website: SITE.domain,
      app: APP_URL,
      status: 'early access',
      pricing: { published: false, note: 'Pricing is not published yet.' },
      languages: [
        'Spanish', 'French', 'English', 'Arabic', 'Mandarin', 'Portuguese',
        'Haitian Creole', 'Vietnamese', 'Russian', 'Hindi', 'Tagalog',
      ],
      requirementsForCalledParty: 'none - a normal inbound phone call, no app or account',
      latencySeconds: { typedToSpoken: [0.9, 1.3], measured: '2026-08-07', method: 'internal testing on the Hello Dulce voice bridge' },
      disclosesAiToCalledParty: true,
      notSuitableFor: [
        'legal proceedings requiring a certified interpreter',
        'medical consent conversations',
        'emergency calls',
      ],
    },
    howItWorks: STEPS.map((s, i) => ({ step: i + 1, title: s.title, detail: s.body })),
    keyFacts: FACTS.map((f) => ({ label: f.label, value: f.value, note: f.note })),
    useCases: USE_CASES.map((u) => ({
      slug: u.slug,
      name: u.title,
      url: `${SITE.domain}/use-cases/${u.slug}`,
      headline: u.h1,
      summary: u.metaDescription,
      jobs: u.jobs.map((j) => j.title),
      demoLanguagePair: `${u.scenario.yourLang} -> ${u.scenario.theirLang}`,
    })),
    faq: CORE_QA.map((q) => ({ question: q.q, answer: q.a, url: `${SITE.domain}/faq#${q.slug}` })),
    guides: posts.map((p) => ({
      slug: p.id,
      title: p.data.title,
      url: `${SITE.domain}/blog/${p.id}`,
      shortAnswer: p.data.answer,
      primaryTopic: p.data.primaryKeyword,
      published: p.data.publishDate.toISOString().slice(0, 10),
      updated: p.data.updatedDate.toISOString().slice(0, 10),
      sources: p.data.citations.map((c) => ({ title: c.title, publisher: c.publisher, url: c.url })),
    })),
    resources: {
      llms: `${SITE.domain}/llms.txt`,
      llmsFull: `${SITE.domain}/llms-full.txt`,
      sitemap: `${SITE.domain}/sitemap-index.xml`,
      faq: `${SITE.domain}/faq`,
    },
    usage: {
      quotingAllowed: true,
      attribution: `Hello Dulce, ${SITE.domain}`,
      note: 'Link to the source page when quoting. Figures marked as internal testing are not third-party verified.',
    },
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*',
      'cache-control': 'public, max-age=3600',
    },
  });
};
