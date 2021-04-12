import { Product } from '../models';
import {
  ProductCreatePayload,
  ProductUpdatePayload,
  User,
  Product as ProductType,
} from "../types";

const createProduct = async (productPayload: ProductCreatePayload, user: User): Promise<ProductType> => {
  const product = await Product.create({
    ...productPayload,
    userId: user.id,
  }).save();
  return product;
}

const getAllProducts = async (): Promise<ProductType[]> => {
  const products = await Product.find();
  return products;
}

const getProductById = async (productId: string): Promise<ProductType> => {
  const product = await Product.findOne(productId);
  return product;
}

const updateProduct = async (productId: string, productPayload: ProductUpdatePayload): Promise<void> => {
  await Product.update(productId, productPayload);
}

const deleteProduct = async (productId: string): Promise<void> => {
  await Product.delete(productId);
}

export const ProductService = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
