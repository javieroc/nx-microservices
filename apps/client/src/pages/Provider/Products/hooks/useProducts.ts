import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../../constants';
import { ProductApi } from '../api';
import { Product } from '../types';

function useProducts() {
  return useQuery<Product[]>(QUERY_KEYS.PRODUCTS, () => ProductApi.getProducts());
}

export { useProducts };
