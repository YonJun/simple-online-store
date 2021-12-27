import { PRODUCT_AXIOS } from "../config";
import type { Product } from "./../custom-types/product";

export const GET_products = () => {
  return PRODUCT_AXIOS.get<Product[]>("/products").then((res) => res.data);
};
export const GET_getProductById = (id: any) => {
  return PRODUCT_AXIOS.get<Product>(`/products/${id}`).then((res) => res.data);
};
