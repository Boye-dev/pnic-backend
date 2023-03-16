import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const TopUser = ({ username, role }) => {
  return (
    <Box
      sx={{
        border: "1px solid #56351E",
        borderRadius: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginY: "10px",
      }}
    >
      <Avatar sx={{ marginY: "5px" }} />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "14px",
          marginY: "5px",
        }}
      >
        {username}
      </Typography>
      <Typography sx={{ color: "#A9A9A9", fontWeight: "400", marginY: "5px" }}>
        {role}
      </Typography>
    </Box>
  );
};

export default TopUser;
