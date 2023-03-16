import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import Table from "../../../shared/Table.tsx";
import { header } from "./Dashboard";
import { ReactComponent as EditIcon } from "../../../assets/svgs/edit.svg";
import ProductBox from "../components/ProductsComponent/ProductBox";

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
          label={status?.toLowerCase() === "active" ? "Active" : "Inactive"}
          size="small"
          sx={{
            borderRadius: 1,
            backgroundColor:
              status?.toLowerCase() === "active"
                ? "#00BB8A"
                : status?.toLowerCase() === "inactive"
                ? "#BB2D00"
                : "#FFD4D2",
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
        <Typography sx={header}>Product</Typography>
        <Grid container spacing={6}>
          <Grid item xs={9}>
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
          <Grid item xs={3}>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained">
                <EditIcon />
              </Button>
            </Box>
            <Box
              mt={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#00BB8A",
                  fontWeight: "bold",
                }}
              >
                Top Products
              </Typography>
              <Typography fontSize="14px" textAlign="center">
                Products with the highest sales
              </Typography>
              <ProductBox productname={"Potato Chips"} />
              <ProductBox productname={"Pin pop"} />
              <ProductBox productname={"Fresh Yo"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Products;
