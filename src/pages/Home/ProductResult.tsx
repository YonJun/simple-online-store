import React from "react";
import { useMatch } from "react-location";
import { Loader } from "../../components/Loader";
import { ItemDetails } from "../../components/ItemDetails";
import { useProductQuery } from "../../query/products";
import { ProductPagesContainer } from "../../modules/product/ProductPagesContainer";
import { useCartProductStore } from "./../../modules/product/store";

export function ProductResul() {
  const {
    params: { productId },
  } = useMatch();

  const {
    status,
    data: product,
    error,
    isFetching,
    isLoading,
  } = useProductQuery(productId);
  const { products, add, remove } = useCartProductStore((state) => state);
  const isAdded = !!products.find((p) => p.id === Number(productId));

  if (isLoading) {
    return <Loader />;
  }
  if (status === "error") return <span>Error: {error.message}</span>;

  if (product) {
    const onAddClick = () => {
      if (isAdded) {
        remove(Number(productId));
      } else {
        add(product);
      }
    };
    return (
      <ProductPagesContainer>
        <ItemDetails
          src={product.image}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          ratingRate={product.rating.rate}
          isAdded={isAdded}
          onClick={onAddClick}
        />
      </ProductPagesContainer>
    );
  }

  return <div>Product not found {productId}</div>;
}
