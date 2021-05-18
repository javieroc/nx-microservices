import { Category, CategoryCreatePayload, CategoryUpdatePayload } from './types';
import { api } from '../../../utils';

async function getCategories(): Promise<Category[]> {
  const { data } = await api.get('/provider/categories');
  return data;
}

async function createCategory(payload: CategoryCreatePayload): Promise<Category> {
  const { data } = await api.post('/provider/categories', { category: payload });
  return data;
}

async function updateCategory({ id, ...payload }: CategoryUpdatePayload): Promise<Category> {
  const { data } = await api.put(`/provider/categories/${id}`, { category: payload });
  return data;
}

async function deleteCategory(id: string): Promise<void> {
  return api.delete(`/provider/categories/${id}`);
}

export const CategoryApi = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
