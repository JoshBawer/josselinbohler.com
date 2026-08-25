import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const proof = z.object({ value: z.coerce.string(), label: z.string() });
const safeLink = z.object({
  label: z.string(),
  url: z.string().url(),
  kind: z.enum(['github', 'external'])
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    slug: z.string(),
    locale: z.enum(['en', 'fr']),
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    status: z.enum(['Published', 'Prototype', 'Internal tool', 'Archived']),
    year: z.string(),
    role: z.string(),
    problem: z.string(),
    approach: z.array(z.string()),
    outcome: z.string(),
    stack: z.array(z.string()),
    proofs: z.array(proof),
    cover: z.string(),
    coverAlt: z.string(),
    featured: z.boolean(),
    order: z.number(),
    links: z.array(safeLink).optional()
  })
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    id: z.string(),
    locale: z.enum(['en', 'fr']),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    location: z.string(),
    summary: z.string(),
    achievements: z.array(z.string()),
    contexts: z.array(z.string()).optional(),
    order: z.number()
  })
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    slug: z.string(),
    locale: z.enum(['en', 'fr']),
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    readingTime: z.string()
  })
});

export const collections = { projects, experience, insights };
