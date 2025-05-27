import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const nav = defineCollection({
  loader: file('./src/collections/nav.yaml'),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    url: z.string(),
  })
})

export const collections = { nav }
