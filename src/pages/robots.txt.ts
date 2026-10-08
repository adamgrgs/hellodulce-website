import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

export const prerender = true;

/** Explicitly welcomes answer-engine and agent crawlers (several of them only
 *  read rules addressed to their own user-agent) and points them at the
 *  machine-readable resources. */
const AI_AGENTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'GoogleOther',
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
  'Amazonbot',
  'meta-externalagent',
  'MistralAI-User',
  'DuckAssistBot',
  'YouBot',
  'cohere-ai',
];

export const GET: APIRoute = () => {
  const body = `# Hello Dulce - ${SITE.domain}
# Humans, search crawlers and AI agents are all welcome.
# Structured entry points: /llms.txt  /llms-full.txt  /api/site.json

User-agent: *
Allow: /

${AI_AGENTS.map((a) => `User-agent: ${a}\nAllow: /`).join('\n\n')}

Sitemap: ${SITE.domain}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
};
