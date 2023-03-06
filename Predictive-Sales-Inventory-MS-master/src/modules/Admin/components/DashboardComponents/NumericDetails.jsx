import { Box, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as SalesIcon } from "../../../../assets/svgs/sales.svg";

const NumericDetails = ({ num, icon, iconBgColor, countType, bColor }) => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid blue",
          borderColor: bColor,
          display: "flex",
          height: "60px",
          padding: "42px",
          justifyContent: "space-between",
          borderRadius: "15px",
          alignItems: "flex-end",
        }}
      >
        <Box
          border="1px solid #2364AA"
          sx={{
            background: iconBgColor,
            width: "80px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingY: "20px",
          }}
        >
          {/* <SalesIcon /> */}
          <img src={icon} alt="logo" />
        </Box>
        <Box marginBottom="0">
          <Typography variant="h3"> {num}</Typography>
        </Box>
        <Box paddingBottom="0">
          <Typography>{countType} </Typography>
        </Box>
      </Box>
    </>
  );
};

export default NumericDetails;
