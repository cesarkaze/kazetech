import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviewsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    category: z.string(),
    featuredImage: z.string(),
    product: z.object({
      name: z.string(),
      badge: z.string().optional(),
      rating: z.string(),
      pros: z.array(z.string()),
      cons: z.array(z.string()),
      affiliateUrl: z.string(),
    }),
  }),
});

export const collections = {
  reviews: reviewsCollection,
};