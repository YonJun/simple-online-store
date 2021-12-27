import { Box } from "@mui/material";
import React from "react";
import { ProductPagesContainer } from "../modules/product/ProductPagesContainer";

export function E404() {
  return (
    <ProductPagesContainer>
      <Box textAlign="center" component="h2">
        Page not found!
      </Box>
    </ProductPagesContainer>
  );
}
