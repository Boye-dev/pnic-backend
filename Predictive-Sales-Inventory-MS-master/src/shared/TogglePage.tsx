import React from "react";
import { Box, Typography } from "@mui/material";

interface ITogglePage {
  name: string;
  activeTab: number;
  index: number;
  handleClick:  (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const TogglePage = ({ name, activeTab, index, handleClick }: ITogglePage) => {
  return (
    <Box
      onClick={(event:React.MouseEvent<HTMLDivElement, MouseEvent>)  => handleClick(event)}
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
