import React from "react";
import Rating from "@mui/material/Rating";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box } from "@mui/system";
interface ItemDetailsProps {
  src: string;
  id: number;
  title: string;
  price: number;
  description: string;
  ratingRate: number;
  isAdded?: boolean;
  onClick?: () => void;
}
export function ItemDetails(props: ItemDetailsProps) {
  const {
    src,
    id,
    title,
    price,
    description,
    ratingRate,
    isAdded = false,
    onClick,
  } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <img
          src={src}
          width="100%"
          height="auto"
          alt={title}
          style={{ display: "block", maxWidth: 300, margin: "0 auto" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="100%">
          <Typography variant="h1" fontSize={25} fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Box display="flex" justifyContent="space-between" pt={2}>
            <Typography fontWeight="bold" fontSize={25}>
              {`$${price}`}
            </Typography>
            <Rating name="Rating" value={ratingRate} readOnly />
          </Box>

          <Box pt={5}>
            <Button
              size="small"
              startIcon={<AddShoppingCartIcon />}
              variant="contained"
              color={isAdded ? "error" : "primary"}
              onClick={() => {
                if (typeof onClick !== "undefined") onClick();
              }}>
              {isAdded ? "Eliminar" : "Agregar"}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
