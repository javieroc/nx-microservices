import { useQuery } from 'react-query';
import { Category } from '../../../../types';
import { QUERY_KEYS } from '../../../../constants';
import { CategoryApi } from '../api';

function useCategories() {
  return useQuery<Category[]>(QUERY_KEYS.CATEGORIES, () => CategoryApi.getCategories());
}

export { useCategories };
