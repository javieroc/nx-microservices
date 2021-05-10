import { useMutation, UseMutationOptions } from 'react-query';
import { CategoryApi } from '../api';

function useDeleteCategory(options: UseMutationOptions<void, unknown, string, unknown> = {}) {
  return useMutation(CategoryApi.deleteCategory, options);
}

export { useDeleteCategory };
