import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Bar from "../../components/Bar";
import { useCartProductStore } from "./store";
import { ListItem } from "./../../components/ListItem";
import Button from "@mui/material/Button";

export const ProductPagesContainer: React.FC<{}> = ({ children }) => {
  const { products, remove, clear } = useCartProductStore((s) => s);
  const total = products.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0,
  );

  const handleClear = () => {
    if (
      window.confirm(
        "Estás seguro de eliminar todos los productos de tu lista?",
      )
    ) {
      clear();
    }
  };
  return (
    <>
      <Bar
        carCount={products.length}
        items={products}
        renderStart={() => (
          <Box component="li" display="flex" justifyContent="flex-end">
            <Button onClick={handleClear} color="error">
              vaciar
            </Button>
          </Box>
        )}
        renderEnd={() => (
          <Typography sx={{ pt: 2 }}>{`Total: $${
            Math.round((total + Number.EPSILON) * 100) / 100
          }`}</Typography>
        )}
        render={(p) => (
          <ListItem title={p.title} onClick={() => remove(p.id)} />
        )}
        keyExtractor={(p) => `${p.id}`}
      />
      <Container maxWidth="lg">
        <Box py={3}>{children}</Box>
      </Container>
    </>
  );
};
