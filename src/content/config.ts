import { defineCollection, z } from "astro:content";

const specials = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      title: z.string(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      cover: image(),
    }),
});

export const collections = { specials };
