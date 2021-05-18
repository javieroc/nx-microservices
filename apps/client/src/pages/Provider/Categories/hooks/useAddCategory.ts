import { useMutation, UseMutationOptions } from 'react-query';
import { Category, CategoryCreatePayload } from '../types';
import { CategoryApi } from '../api';

function useAddCategory(options: UseMutationOptions<Category, unknown, CategoryCreatePayload, unknown> = {}) {
  return useMutation(CategoryApi.createCategory, options);
}

export { useAddCategory };
