export interface Category {
  id: string;
  name: string;
  description: string;
}

export type CategoryCreatePayload = Omit<Category, 'id'>;

export type CategoryUpdatePayload = Partial<Omit<Category, 'id'>>;
