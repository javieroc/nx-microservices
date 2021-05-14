import { useQuery } from 'react-query';
import { Product } from '../../../../types';
import { QUERY_KEYS } from '../../../../constants';
import { ProductApi } from '../api';

function useProducts() {
  return useQuery<Product[]>(QUERY_KEYS.PRODUCTS, () => ProductApi.getProducts());
}

export { useProducts };
