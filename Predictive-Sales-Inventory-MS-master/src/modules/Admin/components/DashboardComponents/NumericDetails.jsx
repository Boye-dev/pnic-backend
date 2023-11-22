import { Box, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as SalesIcon } from "../../../../assets/svgs/sales.svg";

const NumericDetails = ({
  num,
  icon,
  iconBgColor,
  countType,
  bColor,
  bgColor,
  textColor,
}) => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid blue",
          borderColor: bColor,
          display: "flex",
          height: "50px",
          padding: "20px",
          justifyContent: "space-between",
          borderRadius: "15px",
          alignItems: "center",
          backgroundColor: bgColor,
        }}
      >
        <Box
          border="1px solid #2364AA"
          sx={{
            background: iconBgColor,
            borderColor: iconBgColor,
            width: "80px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingY: "5px",
            marginTop: "5px",
          }}
        >
          <img src={icon} alt="logo" height="30px" />
        </Box>

        <Typography variant="h3" marginBottom="-6px" color={textColor} pl={2}>
          {" "}
          {num}
        </Typography>

        <Typography
          color={textColor}
          fontWeight="bold"
          pl={2}
          textAlign="center"
        >
          {countType}{" "}
        </Typography>
      </Box>
    </>
  );
};

export default NumericDetails;
