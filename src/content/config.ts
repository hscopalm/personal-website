// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `schema` for each collection
const blogSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  author: z.string(),
  pubDate: z.date(),
  
  image: z.object({
      url: z.string(),
      alt: z.string()
  }).optional(),
  
  external: z.boolean(),
  draft: z.boolean(),
  tags: z.array(z.string()).optional(),
});

const projectsSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  author: z.string(),
  pubDate: z.date(),
  
  draft: z.boolean(),

  url: z.string(),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: defineCollection({ type: 'content', schema: blogSchema }),
  projects: defineCollection({ type: 'content', schema: projectsSchema }),
};
