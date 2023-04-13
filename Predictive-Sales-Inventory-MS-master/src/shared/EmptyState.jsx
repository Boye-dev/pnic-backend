import React from "react";
import Box from "@mui/material/Box";
import shoppingCart from "../assets/gifs/shopping-cart.gif";
import { Typography } from "@mui/material";

const EmptyState = ({ emptyText }) => {
  return (
    <>
      <Box
      // sx={{
      //   border: "1px solid",
      //   borderRadius: "25%",
      //   backgroundColor: "#e8e8e8",
      // }}
      >
        <img src={shoppingCart} width="20%" height="20%" />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          {emptyText}
        </Typography>
      </Box>
    </>
  );
};

export default EmptyState;
