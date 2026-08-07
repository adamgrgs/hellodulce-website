import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(20),
    metaTitle: z.string().min(20).max(70),
    description: z.string().min(70).max(180),
    // The 40–60 word answer-first passage. Rendered at the top of the page and
    // reused in FAQPage / llms.txt so answer engines can lift it verbatim.
    answer: z.string().min(120),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    readingMinutes: z.number().int().positive(),
    accent: z.string().default('#ff6a2b'),
    keyNumbers: z.array(z.object({ value: z.string(), label: z.string() })).min(3),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).min(4),
    citations: z
      .array(
        z.object({
          id: z.string(),
          title: z.string(),
          publisher: z.string(),
          year: z.string(),
          url: z.string().url(),
        }),
      )
      .min(2),
    relatedUseCases: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
