import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { ReactComponent as EditIcon } from "../../../assets/svgs/edit.svg";
import Table from "../../../shared/Table.jsx";
import { header } from "../../Admin/pages/Dashboard";
import ProductBox from "../../Admin/components/ProductsComponent/ProductBox";

const budgetItems = [
  {
    id: 1,
    product: "Adejola",
    amount: 2000,
    status: "In stock",
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

export default Product;
