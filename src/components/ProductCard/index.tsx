import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography, Box, Paper } from "@mui/material";
import { addCartItem, getProductCartItemsQuantity } from "@/redux/cartSlice";
import { Product } from "@/types/product";
import Link from "next/link";
import { CartItem } from "@/types/cart";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  const cartItemQuantity = useSelector(getProductCartItemsQuantity(product.id));

  function handleAddToCart() {
    dispatch(addCartItem({ product: product, amount: 1 }));
  }

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
        textAlign: "center",
      }}
    >
      <Link href={`/details/${product.id}`} passHref>
        <Typography variant="h6" component="a">
          {product.title} ({product.year})
        </Typography>
      </Link>
      <Button
        onClick={handleAddToCart}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Add to cart {cartItemQuantity > 0 ? `(${cartItemQuantity})` : null}
      </Button>
    </Paper>
  );
};

export default ProductCard;
