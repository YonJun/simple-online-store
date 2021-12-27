import * as React from "react";
import { default as MuiCard } from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export interface CardProps {
  id: any;
  src: string;
  name: string;
  price: number;
  description: string;
  onAddClick?: () => void;
  onShowMoreClick?: () => void;
  isAdded?: boolean;
}
export function Card(props: CardProps) {
  const {
    src,
    name,
    price,
    description,
    onAddClick,
    onShowMoreClick,
    isAdded,
  } = props;
  return (
    <MuiCard
      sx={{
        maxWidth: 300,
        margin: "0 auto",
        height: 440,
        position: "relative",
      }}>
      <CardMedia component="img" height="240" image={src} alt={name} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          width: "100%",
          position: "absolute",
          bottom: "0",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Typography
          color="secondary.main"
          fontWeight="bold"
          fontSize={18}>{`$${price}`}</Typography>
        <div>
          <Button
            size="small"
            onClick={() => {
              if (typeof onShowMoreClick !== "undefined") {
                onShowMoreClick();
              }
            }}>
            Ver más
          </Button>
          <Button
            sx={{ marginLeft: 1 }}
            size="small"
            startIcon={<AddShoppingCartIcon />}
            variant="contained"
            onClick={() => {
              if (typeof onAddClick !== "undefined") {
                onAddClick();
              }
            }}
            color={isAdded ? "error" : "primary"}>
            {isAdded ? "Eliminar" : "Agregar"}
          </Button>
        </div>
      </CardActions>
    </MuiCard>
  );
}
