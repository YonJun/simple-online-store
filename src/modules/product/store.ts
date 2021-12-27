import create from "zustand";
import type { Product } from "./../../custom-types/product";

interface ShoppingCartProducts {
  products: Product[];
  add: (p: Product) => void;
  remove: (by: number) => void;
  clear: () => void;
}

export const useCartProductStore = create<ShoppingCartProducts>((set) => ({
  products: [],
  add: (product) =>
    set(({ products }) => {
      if (!products.find((p) => product.id === p.id)) {
        return { products: [...products, product] };
      }
      return { products };
    }),
  clear: () => set(() => ({ products: [] })),
  remove: (productId) =>
    set(({ products }) => ({
      products: products.filter((p) => p.id !== productId),
    })),
}));
