import { useMutation, UseMutationOptions } from "react-query";
import { ProductApi } from "../api";
import { Product, ProductCreatePayload } from "../types";

function useAddProduct(options: UseMutationOptions<Product, unknown, ProductCreatePayload, unknown> = {}) {
  return useMutation(ProductApi.createProduct, options);
}

export { useAddProduct };
