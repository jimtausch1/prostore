import { insertProductSchema } from '@/lib/validators';
import { z } from 'zod';

type BaseProduct = {
  id?: string;
  rating: string;
  numReviews: number;
  createdAt?: Date;
};

export type Product = z.infer<typeof insertProductSchema> & BaseProduct;
