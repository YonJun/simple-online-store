import React, { useCallback, useState } from "react";
import { useNavigate } from "react-location";
import { Card, CardProps } from "../../components/Card";
import { useCartProductStore } from "./store";
import type { Product } from "./../../custom-types/product";

interface ItemCardProps extends CardProps {
  data: Product;
}
export function ItemCard(props: ItemCardProps) {
  const navigate = useNavigate();
  const { products, add, remove } = useCartProductStore((state) => state);
  const isAdded = !!products.find((p) => p.id === props.id);

  const onAddClick = () => {
    if (isAdded) {
      remove(props.id);
    } else {
      add(props.data);
    }
  };

  return (
    <Card
      {...props}
      isAdded={isAdded}
      onAddClick={onAddClick}
      onShowMoreClick={() => {
        navigate({ to: `./p/${props.id}` });
      }}
    />
  );
}
