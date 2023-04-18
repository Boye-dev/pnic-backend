import React from "react";
import Box from "@mui/material/Box";
import shoppingCart from "../assets/gifs/shopping-cart.gif";
import { Typography } from "@mui/material";

const EmptyState = ({ emptyText }) => {
  return (
    <>
      <Box
        sx={{
          // border: "1px solid",
          // borderRadius: "25%",
          // backgroundColor: "#e8e8e8",
          textAlign: "center",
        }}
      >
        <img src={shoppingCart} width="20%" height="20%" />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {emptyText}
        </Typography>
      </Box>
    </>
  );
};

export default EmptyState;
