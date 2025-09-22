import {
  cartItemSchema,
  insertCartSchema,
  insertOrderItemSchema,
  insertProductSchema,
  shippingAddressSchema,
} from '@/lib/validators';
import { DefaultSession } from 'next-auth';
import { z } from 'zod';

import 'next-auth';

import 'next-auth/jwt';

type BaseProduct = {
  id?: string;
  rating: string;
  numReviews: number;
  createdAt?: Date;
};

export type Product = z.infer<typeof insertProductSchema> & BaseProduct;
export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
export type OrderItem = z.infer<typeof insertOrderItemSchema>;

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    sub: string;
    role: string;
    name: string;
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession['user'];
  }

  interface User {
    role?: string;
  }
}
