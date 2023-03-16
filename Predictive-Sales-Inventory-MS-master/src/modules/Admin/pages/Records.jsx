import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import React from "react";
import Table from "../../../shared/Table.tsx";
import { header } from "./Dashboard";

const budgetItems = [
  {
    id: 1,
    product: "Adejola",
    quantity_before: "Admin",
    quantity_after: "Active",
    amount_paid: 5000,
    date: "22/10/22",
  },
  {
    id: 1,
    product: "Adejola",
    quantity_before: "Cashier",
    quantity_after: "Inactive",
    amount_paid: 5000,
    date: "22/10/22",
  },
  {
    id: 1,
    product: "Adejola",
    quantity_before: "Admin",
    quantity_after: "Active",
    amount_paid: 5000,
    date: "22/10/22",
  },
  {
    id: 1,
    product: "Adejola",
    quantity_before: "Admin",
    quantity_after: "Active",
    amount_paid: 5000,
    date: "22/10/22",
  },
];

const budgetItem = [
  {
    id: 1,
    product: "Adejola",
    vendor: "Admin",
    status: "Active",
    amount: 5000,
    date: "22/10/22",
  },
  {
    id: 1,
    product: "Adejola",
    vendor: "Cashier",
    status: "Pending",
    amount: 5000,
    date: "22/10/22",
  },
  {
    id: 1,
    product: "Adejola",
    vendor: "Admin",
    status: "Active",
    amount: 5000,
    date: "22/10/22",
  },
  {
    id: 1,
    product: "Adejola",
    vendor: "Admin",
    status: "Active",
    amount: 5000,
    date: "22/10/22",
  },
];

const Records = () => {
  const columns = [
    {
      header: "Products",
      key: "product",
      sort: true,
    },
    {
      header: "Quantity Before",
      key: "quantity_before",
    },
    {
      header: "Quantity After",
      key: "quantity_after",
      sort: true,
      align: "center",
    },
    {
      header: "Amount paid",
      key: "amount_paid",
      sort: true,
      align: "left",
    },
    {
      header: "Date",
      key: "date",
      align: "left",
    },
  ];

  const columns2 = [
    {
      header: "Product ID",
      key: "product",
      sort: true,
    },
    {
      header: "Vendor",
      key: "vendor",
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

  function creatData({
    id,
    product,
    quantity_before,
    quantity_after,
    amount_paid,
    date,
  }) {
    return {
      id,
      product: product || "--",
      quantity_before: quantity_before || "--",
      quantity_after: quantity_after || "--",
      amount_paid: amount_paid || "==",
      date: date || "--",
    };
  }

  function anotherData({ id, product, vendor, status, amount, date }) {
    return {
      id,
      product: product || "--",
      vendor: vendor || "--",
      status: (
        <Chip
          label={status?.toLowerCase() === "active" ? "Active" : "Pending"}
          size="small"
          sx={{
            borderRadius: 1,
            backgroundColor:
              status?.toLowerCase() === "active"
                ? "#00BB8A"
                : status?.toLowerCase() === "pending"
                ? "#FF8C42"
                : "#FFD4D2",
            color: "white",
            width: "60px",
          }}
        />
      ),
      amount: amount || "==",
      date: date || "--",
    };
  }

  const list = budgetItems?.map(
    ({ id, product, quantity_before, quantity_after, amount_paid, date }) =>
      creatData({
        id,
        product,
        quantity_before,
        quantity_after,
        amount_paid,
        date,
      }) || []
  );

  const lineUp = budgetItem?.map(
    ({ id, product, vendor, status, amount, date }) =>
      anotherData({
        id,
        product,
        vendor,
        status,
        amount,
        date,
      }) || []
  );

  return (
    <>
      <Box marginX="20px" mb={4}>
        <Typography sx={header}>Records</Typography>
        <Grid container>
          <Grid
            item
            xs={9}
            sx={{
              border: "1px solid #FF7F11",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            Sales
            <Table columns={columns} data={list} />
            Purchases
            <Table columns={columns2} data={lineUp} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Records;
