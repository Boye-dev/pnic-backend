import { Box, Typography, Button, Chip } from "@mui/material";
import React from "react";

const PurchaseSummary = () => {
  const productInfo = [
    {
      index: "A - 12355788",
      name: "Joy",
      date: "Today",
      status: "Delivered",
      amount: "2000",
    },
    {
      index: "B - 12355788",
      name: "Joy",
      date: "Today",
      status: "Delivered",
      amount: "2000",
    },
    {
      index: "M - 12355788",
      name: "Joy",
      date: "Today",
      status: "Pending",
      amount: "2000",
    },
    {
      index: "E - 12355788",
      name: "Joy",
      date: "Today",
      status: "Delivered",
      amount: "2000",
    },
  ];

  return (
    <>
      <Box
        sx={{
          border: "1px solid #E55934",
          borderRadius: "15px",
          padding: "15px 30px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "599" }}>
            Latest Purchases
          </Typography>
          <Button
            sx={{
              height: "25px",
              textTransform: "capitalize",
              backgroundColor: "#E55934",
              color: "white",
            }}
          >
            See More
          </Button>
        </Box>
        <Box marginTop="15px">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "15px", color: "#A9A9A9" }}>
              Purchase ID
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#A9A9A9" }}>
              Vendor
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#A9A9A9" }}>
              Date
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#A9A9A9" }}>
              Status
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#A9A9A9" }}>
              Amount
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              {productInfo?.map((element) => (
                <React.Fragment key={element.id}>
                  <Typography sx={{ fontSize: "15px", marginBottom: "12px" }}>
                    {element.index}
                  </Typography>
                </React.Fragment>
              ))}
            </Box>
            <hr />

            <Box>
              {productInfo?.map((element) => (
                <React.Fragment key={element.id}>
                  <Typography sx={{ fontSize: "15px", marginBottom: "12px" }}>
                    {element.name}
                  </Typography>
                </React.Fragment>
              ))}
            </Box>
            <hr />

            <Box>
              {productInfo?.map((element) => (
                <React.Fragment key={element.id}>
                  <Typography sx={{ fontSize: "15px", marginBottom: "12px" }}>
                    {element.date}
                  </Typography>
                </React.Fragment>
              ))}
            </Box>
            <hr />
            <Box>
              {productInfo?.map((element) => (
                <React.Fragment key={element.id}>
                  <Box>
                    <Chip
                      label={element.status}
                      size="small"
                      sx={{
                        borderRadius: 1,
                        fontSize: "12px",
                        width: "83px",
                        marginBottom: "10px",
                        backgroundColor:
                          element.status === "Delivered"
                            ? "#00BB8A"
                            : "#FF8C42",
                        color: "white",
                      }}
                    />
                    <br />
                  </Box>
                </React.Fragment>
              ))}
            </Box>
            <hr />
            <Box>
              {productInfo?.map((element) => (
                <React.Fragment key={element.id}>
                  <Typography sx={{ fontSize: "15px", marginBottom: "12px" }}>
                    {element.amount}
                  </Typography>
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PurchaseSummary;
