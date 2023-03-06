import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { ReactComponent as BluePerson } from "../../../assets/svgs/bluePerson.svg";

const ProfileBox = ({ number, userType, icon, onClick, bgColor, bgColor2 }) => {
  return (
    <div>
      <Box
        sx={{
          //   height: "200px",
          // width: "fit-content",
          border: "1px",
          borderRadius: "25px",
          color: "white",
          backgroundColor: bgColor2,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{
            backgroundColor: bgColor,
            borderRadius: "25px 25px 0 0",
            padding: "20px",
          }}
        >
          <Box marginBottom="0">
            {" "}
            <Typography
              variant="h1"
              sx={{
                fontWeight: "700",
              }}
            >
              {number}
            </Typography>
          </Box>
          <Box marginLeft="-10px">
            <Typography>{userType}</Typography>
            <Typography fontSize="26px" marginTop="-10px">
              users
            </Typography>
          </Box>
          <Box>
            <img src={icon} alt="logo" />
          </Box>
        </Box>
        <Typography
          sx={{
            marginY: "10px",
            textAlign: "center",
            paddingBottom: "5px",
          }}
        >
          see more info
        </Typography>
      </Box>
    </div>
  );
};

export default ProfileBox;
