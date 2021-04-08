export interface Product {
  id: string;
  name: string;
  description: string;
  amount: number;
  price: number;
}

export type ProductPayload = Omit<Product, 'id'>;
