import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../../constants';
import { Category } from '../types';
import { CategoryApi } from '../api';

function useCategories() {
  return useQuery<Category[]>(QUERY_KEYS.CATEGORIES, () => CategoryApi.getCategories());
}

export { useCategories };
