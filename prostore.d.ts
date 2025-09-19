import { insertProductSchema } from '@/lib/validators';
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
