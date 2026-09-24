import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviewsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    featured: z.boolean().optional(), // <-- El interruptor para la portada
    title: z.string(),
    description: z.string(),
    publishDate: z.any(), // <-- Cambiado a z.any() para evitar el error de la fecha en Vercel
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