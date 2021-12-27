import { useQuery } from "react-query";
import { GET_getProductById, GET_products } from "../services/products";
import type { Product } from "./../custom-types/product";

export const useProductsQuery = () => useQuery("list-products", GET_products);

export function useProductQuery(productId: any) {
  return useQuery<Product, any>(
    ["list-products", productId],
    () => GET_getProductById(productId),
    {
      enabled: !!productId,
    },
  );
}
