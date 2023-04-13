import React from "react";
import { Box, Typography } from "@mui/material";

const TogglePage = ({ name, activeTab, index, handleClick }) => {
  return (
    <Box
      onClick={(event) => handleClick(event)}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: index === activeTab ? "#FFFFFF" : "transparent",
        width: "auto",
        height: "14px",
        ml: "4px",
        mr: "4px",
        fontSize: "8px !important",
        borderRadius: "4px",
        p: 1,
        cursor: "pointer",
      }}
    >
      <Typography
        sx={{
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          color: "black",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default TogglePage;
