import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const nav = defineCollection({
  loader: file('./src/collections/nav.yaml'),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
  })
})

export const collections = { nav }
