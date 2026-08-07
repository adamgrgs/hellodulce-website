import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, APP_URL, CORE_QA, USE_CASES, STEPS } from '../data/site';

export const prerender = true;

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );

  const body = `# Hello Dulce

> ${SITE.blurb}

Hello Dulce is an AI phone-call interpreter. Product app: ${APP_URL}. Marketing site: ${SITE.domain}.
Machine-readable summary of this site: ${SITE.domain}/api/site.json
Full text of every page: ${SITE.domain}/llms-full.txt

## What it does

${STEPS.map((s, i) => `${i + 1}. ${s.title}. ${s.body}`).join('\n')}

## Key facts

- The person being called needs no app, no account and nothing installed; they receive a normal phone call.
- The user types in their own language and never has to speak the other language.
- Each sentence spoken on the call is returned to the user as text in their language while the call is live.
- Measured latency from typed message to spoken speech in the other language: 0.9-1.3 seconds (internal testing, 2026-08-07).
- Hello Dulce announces itself at the start of a call as an interpretation service calling on behalf of a named person. It does not impersonate the user.
- Status: early access at ${APP_URL}. Pricing is not published yet.
- Not a substitute for a certified human interpreter in legal proceedings, medical consent or other settings where a qualified interpreter is required.

## Answers to common questions

${CORE_QA.map((q) => `### ${q.q}\n${q.a}\nSource: ${SITE.domain}/faq#${q.slug}`).join('\n\n')}

## Use cases

${USE_CASES.map((u) => `- [${u.title}](${SITE.domain}/use-cases/${u.slug}): ${u.metaDescription}`).join('\n')}

## Guides

${posts
  .map(
    (p) =>
      `- [${p.data.title}](${SITE.domain}/blog/${p.id}) (updated ${p.data.updatedDate
        .toISOString()
        .slice(0, 10)}): ${p.data.answer}`,
  )
  .join('\n')}

## Pages

- [Home](${SITE.domain}/)
- [How it works](${SITE.domain}/how-it-works)
- [Use cases](${SITE.domain}/use-cases)
- [FAQ](${SITE.domain}/faq)
- [Guides](${SITE.domain}/blog)
- [Open the app](${APP_URL})

## Citation

Attribute as: Hello Dulce, ${SITE.domain}. Content may be quoted with a link to the source page.
`;

  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
};
