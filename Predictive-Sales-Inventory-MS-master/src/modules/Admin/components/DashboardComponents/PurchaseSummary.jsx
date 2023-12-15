import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../../../shared/Table";
import { formatCurrency } from "../../../../shared/Categpries";
import { AdminPaths } from "../../../../routes/paths";

const PurchaseSummary = () => {
  const navigate = useNavigate();

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
    // {
    //   index: "M - 12355788",
    //   name: "Joy",
    //   date: "Today",
    //   status: "Pending",
    //   amount: "2000",
    // },
    // {
    //   index: "E - 12355788",
    //   name: "Joy",
    //   date: "Today",
    //   status: "Delivered",
    //   amount: "2000",
    // },
  ];

  const columns = [
    {
      header: "Product ID",
      key: "index",
      sort: true,
    },
    {
      header: "Vendor",
      key: "name",
    },
    {
      header: "Status",
      key: "status",
      sort: true,
      align: "center",
    },
    {
      header: "Amount",
      key: "amount",
      sort: true,
      align: "left",
    },
    {
      header: "Date",
      key: "date",
      align: "left",
    },
  ];

  function purchaseData({ id, index, name, status, amount, date }) {
    return {
      id,
      index: index || "--",
      name: name || "--",
      status: (
        <Chip
          label={
            status?.toLowerCase() === "delivered" ? "Delivered" : "Pending"
          }
          size="small"
          sx={{
            borderRadius: 1,
            backgroundColor:
              status?.toLowerCase() === "delivered"
                ? "#00BB8A"
                : status?.toLowerCase() === "pending"
                ? "#FF8C42"
                : "#FFD4D2",
            color: "white",
            width: "60px",
          }}
        />
      ),
      amount: formatCurrency(amount) || "--",
      date: date || "--",
    };
  }

  const purchases = productInfo?.map(
    ({ id, index, name, status, amount, date }) =>
      purchaseData({
        id,
        index,
        name,
        status,
        amount,
        date,
      }) || []
  );

  const list = purchases;

  return (
    <>
      <Box
        sx={{
          border: "1px solid #E55934",
          borderRadius: "15px",
          padding: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
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
            onClick={() => navigate(AdminPaths.RECORDS)}
          >
            See More
          </Button>
        </Box>
        <Box marginTop="15px">
          <Table columns={columns} data={list} />
        </Box>
      </Box>
    </>
  );
};

export default PurchaseSummary;
