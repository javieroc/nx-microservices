import { Category } from '../models';
import {
  CategoryCreatePayload,
  CategoryUpdatePayload,
  Category as CategoryType,
} from '../types';

const createCategory = async (categoryPayload: CategoryCreatePayload): Promise<CategoryType> => {
  const category = await Category.create(categoryPayload).save();
  return category;
}

const getAllCategories = async (): Promise<CategoryType[]> => {
  const categories = await Category.find();
  return categories;
}

const getCategoryById = async (categoryId: string): Promise<CategoryType> => {
  const category = await Category.findOne(categoryId);
  return category;
}

const updateCategory = async (
  categoryId: string,
  categoryPayload: CategoryUpdatePayload,
): Promise<void> => {
  await Category.update({ id: categoryId }, categoryPayload);
}

const deleteCategory = async (categoryId: string): Promise<void> => {
  await Category.delete(categoryId);
}

export const CategoryService = {
  createCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
  deleteCategory,
}
