import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import React from "react";
import Table from "../../../shared/Table.tsx";
import { header } from "../../Admin/pages/Dashboard";

const budgetItems = [
  {
    id: 1,
    product: "Adejola",
    amount: 2000,
    status: "In stock ",
    date: "22/10/22",
  },
  {
    id: 2,
    product: "Adejola",
    amount: 2000,
    status: "Sold out",
    date: "22/10/22",
  },
  {
    id: 3,
    product: "Adejola",
    amount: 2000,
    status: "Running out",
    date: "22/10/22",
  },
  {
    id: 4,
    product: "Adejola",
    amount: 2000,
    status: "In stock",
    date: "22/10/22",
  },
];

const Product = () => {
  const columns = [
    {
      header: "Product",
      key: "product",
      sort: true,
    },
    {
      header: "Amount",
      key: "amount",
    },
    {
      header: "Status",
      key: "status",
      sort: true,
      // align: "right",
    },
    {
      header: "Date",
      key: "date",
      sort: true,
      align: "left",
    },
  ];

  function creatData({ id, product, amount, status, date }) {
    return {
      id,
      product: product || "--",
      amount: amount || "--",
      date: date || "--",
      status: (
        <Chip
          label={
            status?.toLowerCase() === "in stock"
              ? "In stock"
              : status?.toLowerCase() === "sold out"
              ? "Sold Out"
              : "Running Out"
          }
          size="small"
          sx={{
            borderRadius: 1,
            backgroundColor:
              status?.toLowerCase() === "in stock"
                ? "#00BB8A"
                : status?.toLowerCase() === "sold out"
                ? "#BB2D00"
                : "#FF7F11",
            color: "white",
            width: "60px",
          }}
        />
      ),
    };
  }

  const list = budgetItems?.map(
    ({ id, product, amount, status, date }) =>
      creatData({
        id,
        product,
        amount,
        status,
        date,
      }) || []
  );
  return (
    <>
      <Box marginX="20px">
        <Typography sx={header}>Products</Typography>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Box
              sx={{
                border: "1px solid #FF7F11",
                borderRadius: "15px",
                padding: "10px",
              }}
            >
              <Table columns={columns} data={list} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Product;
