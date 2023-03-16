import { Box, Typography } from "@mui/material";
import React from "react";

const ProductBox = ({ productname }) => {
  return (
    <Box
      sx={{
        border: "1px solid #56351E",
        borderRadius: "10px",
        width: "100%",
        paddingY: "20px",
        marginY: "10px",
      }}
    >
      <Typography
        sx={{ fontSize: "15px", textAlign: "center", fontWeight: 500 }}
      >
        {productname}
      </Typography>
    </Box>
  );
};

export default ProductBox;
