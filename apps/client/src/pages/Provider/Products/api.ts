import { Product, ProductCreatePayload, ProductUpdatePayload } from '../../../types';
import { api } from '../../../utils';

async function getProducts(): Promise<Product[]> {
  const { data } = await api.get('/provider/products');
  return data;
}

async function createProduct(payload: ProductCreatePayload): Promise<Product> {
  const { data } = await api.post('/provider/products', { category: payload });
  return data;
}

async function updateProduct({ id, ...payload }: ProductUpdatePayload): Promise<Product> {
  const { data } = await api.put(`/provider/products/${id}`, { category: payload });
  return data;
}

async function deleteProduct(id: string): Promise<void> {
  return api.delete(`/provider/products/${id}`);
}

export const ProductApi = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
