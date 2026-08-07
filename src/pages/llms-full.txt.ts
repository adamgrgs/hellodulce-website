import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, APP_URL, CORE_QA, USE_CASES, STEPS, FACTS } from '../data/site';
import { SAMPLE } from '../data/audio';

export const prerender = true;

/** Every piece of substantive site copy as one plain-text document, so an agent
 *  or answer engine can ingest the whole site in a single request. */
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );

  const parts: string[] = [];

  parts.push(`# Hello Dulce - full site text
Source: ${SITE.domain}
App: ${APP_URL}
Generated: ${new Date().toISOString().slice(0, 10)}

${SITE.blurb}
`);

  parts.push(`## How it works

${STEPS.map((s, i) => `${i + 1}. ${s.title}\n${s.body}`).join('\n\n')}

### Key facts
${FACTS.map((f) => `- ${f.label}: ${f.value} (${f.note})`).join('\n')}
`);

  parts.push(`## Sample call transcript (Montreal school office)

${SAMPLE.sub}

${SAMPLE.lines.map((l) => `${l.who}: ${l.said}\n  -> ${l.tr}`).join('\n')}
`);

  parts.push(`## FAQ

${CORE_QA.map((q) => `Q: ${q.q}\nA: ${q.a}`).join('\n\n')}
`);

  for (const u of USE_CASES) {
    parts.push(`## Use case: ${u.title}
URL: ${SITE.domain}/use-cases/${u.slug}

${u.h1}

${u.intro}

${u.jobs.map((j) => `### ${j.title}\n${j.body}\nExample of what the user writes: "${j.quote}"`).join('\n\n')}

### Simulated call: ${u.scenario.label} (${u.scenario.yourLang} -> ${u.scenario.theirLang})
${u.scenario.turns
  .map((t) => {
    if (t.kind === 'type') return `User types (${t.lang}): ${t.text}`;
    if (t.kind === 'dial') return `Dulce dials ${t.number} (${t.label})`;
    if (t.kind === 'speak') return `Dulce speaks (${t.lang}): ${t.text}`;
    if (t.kind === 'hear') return `Other person (${t.lang}): ${t.text}\n  -> translated for the user: ${t.translation}`;
    return `Outcome - ${t.title}: ${t.lines.join('; ')}`;
  })
  .join('\n')}

### Questions
${u.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}
`);
  }

  for (const p of posts) {
    parts.push(`## Guide: ${p.data.title}
URL: ${SITE.domain}/blog/${p.id}
Published: ${p.data.publishDate.toISOString().slice(0, 10)} | Updated: ${p.data.updatedDate
      .toISOString()
      .slice(0, 10)}
Primary topic: ${p.data.primaryKeyword}

Short answer: ${p.data.answer}

Key numbers:
${p.data.keyNumbers.map((k) => `- ${k.value}: ${k.label}`).join('\n')}

${p.body ?? ''}

Sources:
${p.data.citations.map((c) => `- [${c.id}] ${c.title} - ${c.publisher}, ${c.year}. ${c.url}`).join('\n')}
`);
  }

  return new Response(parts.join('\n\n---\n\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
};
