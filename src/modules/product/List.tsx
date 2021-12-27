import React from "react";
import { useProductsQuery } from "./../../query/products";
import { Loader } from "./../../components/Loader";
import Grid from "@mui/material/Grid";
import { ItemCard } from "./itemCard";

export function ProductList() {
  const { data, isLoading } = useProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (data)
    return (
      <div>
        <Grid container rowSpacing={3} columnSpacing={2}>
          {data.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <ItemCard
                id={product.id}
                src={product.image}
                name={product.title}
                description={product.description}
                price={product.price}
                data={product}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );

  return <div>Product not found</div>;
}
