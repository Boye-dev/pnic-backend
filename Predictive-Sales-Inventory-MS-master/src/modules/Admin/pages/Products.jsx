import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import React from "react";
import Table from "../../../shared/Table.tsx";

const budgetItems = [
  {
    id: 1,
    product: "Adejola",
    amount: 2000,
    status: "Active",
    date: "22/10/22",
  },
  {
    id: 1,
    product: "Adejola",
    amount: 2000,
    status: "Inactive",
    date: "22/10/22",
  },
  {
    id: 1,
    product: "Adejola",
    amount: 2000,
    status: "Active",
    date: "22/10/22",
  },
  {
    id: 1,
    product: "Adejola",
    amount: 2000,
    status: "Active",
    date: "22/10/22",
  },
];

const Products = () => {
  const columns = [
    {
      header: "Product",
      key: "product",
      sort: true,
    },
    {
      header: "Role",
      key: "amount",
    },
    {
      header: "Status",
      key: "status",
      sort: true,
      // align: "right",
    },
    {
      header: "Starting Date",
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
          label={status?.toLowerCase() === "active" ? "Active" : "Inactive"}
          size="small"
          sx={{
            borderRadius: 1,
            backgroundColor:
              status?.toLowerCase() === "active"
                ? "#00BB8A"
                : status?.toLowerCase() === "completed"
                ? "#BB2D00"
                : "#FFD4D2",
            color: "white",
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
      <Typography component="h1">Product</Typography>
      <Grid container>
        <Grid item xs={8}>
          <Table columns={columns} data={list} />
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
