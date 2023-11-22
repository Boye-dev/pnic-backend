import { Typography, Box, Button } from "@mui/material";
import React from "react";
import PSIMSLogo from "../../../assets/images/PSIMSLogo.png";
import { formatCurrency } from "../../../shared/Categpries";
import { CashierPaths } from "../../../routes/paths";
import { useNavigate } from "react-router-dom";
import Auth from "../../Auth/auth";

const Receipt = () => {
  const today = new Date();
  const dateString = today.toLocaleString();
  const navigate = useNavigate();
  const { getCurrentUser } = Auth;

  const goods = [
    { good: "rice", price: 1000, quantity: 3 },
    { good: "plantain", price: 100, quantity: 3 },
    { good: "watch", price: 10000, quantity: 3 },
  ];

  const getTotalCost = () => {
    return goods.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  return (
    <Box sx={{ margin: "20px 50px" }}>
      <Typography
        sx={{ fontSize: "20px", color: "#0D81FF", fontWeight: "bold" }}
      >
        Your Receipt
      </Typography>
      <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
        This sales was made on the {dateString}{" "}
      </Typography>
      <Box sx={{ margin: "50px 200px", border: "1px solid black" }}>
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "5px",
            }}
          >
            <img src={PSIMSLogo} width="2%" style={{ marginRight: "10px" }} />
            Oscar Mall
          </Typography>
          <hr />
          <Box marginX="100px">
            <Box display="flex" justifyContent="space-between" marginY="20px">
              <Typography sx={{ fontSize: "16px", fontWeight: "14px" }}>
                Cashier on duty
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "14px" }}>
                {getCurrentUser()?.username}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" marginY="20px">
              <Typography sx={{ fontSize: "16px", fontWeight: "14px" }}>
                Name of Customer
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "14px" }}>
                Jola
              </Typography>
            </Box>
            <hr />
            <Box display="flex" justifyContent="space-between" marginY="20px">
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                Goods bought
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                Price per 1
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                Total Price
              </Typography>
            </Box>
            {goods.map(({ good, price, quantity }) => (
              <Box display="flex" justifyContent="space-between" marginY="20px">
                <Typography sx={{ fontSize: "16px", fontWeight: "14px" }}>
                  {good}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "14px",
                    textAlign: "center",
                  }}
                >
                  {formatCurrency(price)}
                </Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "14px" }}>
                  x{quantity} {formatCurrency(price * quantity)}
                </Typography>
              </Box>
            ))}
            <hr />
            <Box display="flex" justifyContent="space-between" marginY="10px">
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                Total Cost of goods:
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                {formatCurrency(getTotalCost())}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" marginY="10px">
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                Mode of Payment:{" "}
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                POS
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        marginX="200px"
      >
        <Button variant="contained" size="large" sx={{ width: "400px" }}>
          Print
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ width: "400px" }}
          onClick={() => navigate(CashierPaths.SALES)}
        >
          Back to sales
        </Button>
      </Box>
    </Box>
  );
};

export default Receipt;
