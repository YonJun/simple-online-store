import React from "react";
import { ProductPagesContainer } from "../../modules/product/ProductPagesContainer";
import { ProductList } from "./../../modules/product/List";

export default function Home() {
  return (
    <ProductPagesContainer>
      <ProductList />
    </ProductPagesContainer>
  );
}
