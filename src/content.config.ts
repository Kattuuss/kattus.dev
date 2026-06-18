// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
// 2. Import loader(s)
import { glob } from 'astro/loaders';
// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    permalink: z.string().optional(),
    title: z.string(),
    description: z.string(),
    heroImage: image(),
    pubDate: z.string(),
    readTime: z.string(),
    tags: z.array(z.string())
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    permalink: z.string().optional(),
    title: z.string(),
    description: z.string(),
    heroImage: image(),
    pubDate: z.string(),
    readTime: z.string(),
    tags: z.array(z.string())
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog, projects };