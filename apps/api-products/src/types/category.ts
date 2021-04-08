export interface Category {
  id: string;
  name: string;
  description: string;
}

export type CategoryCreateObject = Omit<Category, 'id'>;

export type CategoryUpdateObject = Partial<Category>;
