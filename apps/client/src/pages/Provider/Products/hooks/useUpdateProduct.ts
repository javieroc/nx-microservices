import { useMutation, UseMutationOptions } from "react-query";
import { ProductApi } from "../api";
import { Product, ProductUpdatePayload } from "../types";

function useUpdateProduct(options: UseMutationOptions<Product, unknown, ProductUpdatePayload, unknown> = {}) {
  return useMutation(ProductApi.updateProduct, options);
}

export { useUpdateProduct };
