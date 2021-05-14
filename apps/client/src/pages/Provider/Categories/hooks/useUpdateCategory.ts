import { useMutation, UseMutationOptions } from 'react-query';
import { Category, CategoryUpdatePayload } from '../../../types';
import { CategoryApi } from '../api';

function useUpdateCategory(options: UseMutationOptions<Category, unknown, CategoryUpdatePayload, unknown> = {}) {
  return useMutation(CategoryApi.updateCategory, options);
}

export { useUpdateCategory };
