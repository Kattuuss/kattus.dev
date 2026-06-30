// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
// 2. Import loader(s)
import { glob } from 'astro/loaders';
// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    lang: z.enum(['es', 'en']).default('es'),
    permalink: z.string().optional(),
    status: z.string().optional(),
    category: z.string(),
    title: z.string(),
    alt: z.string(),
    description: z.string(),
    banner: image(),
    pubDate: z.string(),
    readTime: z.string(),
    tags: z.array(z.string())
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    lang: z.enum(['es', 'en']).default('es'),
    permalink: z.string().optional(),
    status: z.string().optional(),
    category: z.string(),
    year: z.string(),
    name: z.string(),
    title: z.string(),
    alt: z.string(),
    description: z.string(),
    banner: image(),
    pubDate: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
    sourceCode: z.string().optional(),
    demo: z.string().optional(),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog, projects };