export interface Category {
  id: string;
  name: string;
  description: string;
}

export type CategoryCreatePayload = Pick<Category, 'name' | 'description'>;

export type CategoryUpdatePayload = Pick<Category, 'id'> & Partial<CategoryCreatePayload>;
