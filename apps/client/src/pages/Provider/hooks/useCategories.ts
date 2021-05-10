import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../constants';
import { CategoryApi } from '../api';

function useCategories() {
  return useQuery(QUERY_KEYS.CATEGORIES, () => CategoryApi.getCategories());
}

export { useCategories };
