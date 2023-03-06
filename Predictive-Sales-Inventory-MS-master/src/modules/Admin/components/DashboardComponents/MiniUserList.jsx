import { Button, Typography, Box, Chip } from "@mui/material";
import React from "react";

const MiniUserList = () => {
  const data = [
    {
      index: 1,
      name: "Jola",
      status: "Active",
    },
    {
      index: 2,
      name: "Somi",
      status: "Active",
    },
    {
      index: 3,
      name: "Ore",
      status: "Active",
    },
    {
      index: 4,
      name: "Moyo",
      status: "Inactive",
    },
    {
      index: 5,
      name: "Kemi",
      status: "Inactive",
    },
    {
      index: 6,
      name: "Jola",
      status: "Active",
    },
    {
      index: 7,
      name: "Somi",
      status: "Active",
    },
    {
      index: 10,
      name: "Kemi",
      status: "Inactive",
    },
  ];

  return (
    <>
      <Box
        sx={{
          height: "fit-content",
          border: "1px solid #2364AA",
          borderRadius: "15px",
          // width: "100%",
          padding: "20px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "22px" }}>User List</Typography>
          <Button
            variant="contained"
            sx={{ height: "35px", textTransform: "capitalize" }}
          >
            See More
          </Button>
        </Box>
        <Box marginTop="20px">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "15px", color: "#A9A9A9" }}>
              User Name
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#A9A9A9" }}>
              Status
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              {data?.map((element) => (
                <Typography
                  key={element.index}
                  sx={{ fontSize: "15px", marginBottom: "12px" }}
                >
                  {element.name}
                </Typography>
              ))}
            </Box>
            <hr />
            <Box>
              {data?.map((element) => (
                <Box>
                  <Chip
                    label={element.status}
                    size="small"
                    sx={{
                      borderRadius: 1,
                      // height: "27px",
                      fontSize: "12px",
                      width: "83px",
                      marginBottom: "10px",
                      // marginTop: "5px",
                      backgroundColor:
                        element.status === "Active" ? "#00BB8A" : "#BB2D00",
                      color: "white",
                    }}
                  />
                  <br />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MiniUserList;
