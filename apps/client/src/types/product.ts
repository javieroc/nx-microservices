import { Category, User } from '../types';

export interface Product {
  id: string;
  name: string;
  description: string;
  amount: number;
  price: number;
  user: User;
  category: Category;
}

export interface ProductCreatePayload {
  name: string;
  description: string;
  amount: number;
  price: number;
  categoryId: string;
}

export type ProductUpdatePayload = Pick<Product, 'id'> & Partial<ProductCreatePayload>;
