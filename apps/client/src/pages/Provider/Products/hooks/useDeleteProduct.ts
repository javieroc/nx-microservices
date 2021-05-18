import { useMutation, UseMutationOptions } from 'react-query';
import { ProductApi } from '../api';

function useDeleteProduct(options: UseMutationOptions<void, unknown, string, unknown> = {}) {
  return useMutation(ProductApi.deleteProduct, options);
}

export { useDeleteProduct };
