import { Product } from '../models';
import { ProductPayload, User } from "../types";

const create = async (productPayload: ProductPayload, user: User) => {
  const product = Product.create({
    ...productPayload,
    user,
  }).save();

}

export const ProductService = {

};
