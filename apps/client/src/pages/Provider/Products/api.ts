import { api } from '../../../utils';
import { Product, ProductCreatePayload, ProductUpdatePayload } from './types';

async function getProducts(): Promise<Product[]> {
  const { data } = await api.get('/provider/products');
  return data;
}

async function createProduct(payload: ProductCreatePayload): Promise<Product> {
  const { data } = await api.post('/provider/products', { product: payload });
  return data;
}

async function updateProduct({ id, ...payload }: ProductUpdatePayload): Promise<Product> {
  const { data } = await api.put(`/provider/products/${id}`, { product: payload });
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
