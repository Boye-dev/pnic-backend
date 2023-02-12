import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const ProfileBox = ({ number, userType, icon, onClick, bgColor }) => {
  return (
    <div>
      <Box
        sx={{
          border: "1px solid blue",
          height: "200px",
          width: "320px",
          borderRadius: "15px",
        }}
      >
        <Box>
          <Box
            sx={{
              border: "1px solid red",
              height: "100%",
              margin: "5px",
              alignContent: "center",
              width: "30%",
            }}
          >
            {" "}
            <Typography fontSize="112px">{number}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProfileBox;
