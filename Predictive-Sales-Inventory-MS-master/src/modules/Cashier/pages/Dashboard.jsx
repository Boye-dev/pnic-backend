import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { header } from "../../Admin/pages/Dashboard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import ProfileBox from "../../Admin/components/ProfileBox";
import bluePerson from "../../../assets/svgs/bluePerson.svg";
import greenPerson from "../../../assets/svgs/greenPerson.svg";
import brownPerson from "../../../assets/svgs/brownPerson.svg";
import ProductBox from "../../Admin/components/ProductsComponent/ProductBox";
import Table from "../../../shared/Table.jsx";
import { columns } from "../../Admin/pages/Products";
import api from "../../../api/api";
import { formatCurrency } from "../../../shared/Categpries";
import EmptyState from "../../../shared/EmptyState";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/api/products").then((response) => {
      const data = response.data.products;
      const sortedItems = data.sort((a, b) => b.sales - a.sales);
      const topThreeItems = sortedItems.slice(0, 3);
      setProducts(topThreeItems);
    });
  }, []);

  function creatData({ id, name, price, unit, status, category }) {
    return {
      id,
      name: name || "--",
      price: formatCurrency(price) || "--",
      unit: `${unit} piece(s)` || "--",
      category: category || "--",
      status: (
        <Chip
          label={
            unit >= 20 ? "In stock" : unit === 0 ? "Sold Out" : "Running Out"
          }
          size="small"
          sx={{
            borderRadius: 1,
            backgroundColor:
              unit >= 20 ? "#00BB8A" : unit === 0 ? "#BB2D00" : "#FF7F11",
            color: "white",
            width: "60px",
          }}
        />
      ),
    };
  }

  const list = products?.map(
    ({ id, name, price, unit, status, category }) =>
      creatData({
        id,
        name,
        price,
        unit,
        status,
        category,
      }) || []
  );

  return (
    <>
      <Box marginX="20px" marginBottom="5px">
        <Typography sx={header}>Dashboard</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <ProfileBox
              number="10"
              bgColor="#009DDC"
              bgColor2="#0086BB"
              product
              productType="In Stock"
              icon={bluePerson}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ProfileBox
              number="8"
              bgColor="#009B72"
              bgColor2="#00BB8A"
              product
              productType="Sold Out"
              icon={greenPerson}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ProfileBox
              number="2"
              bgColor="#56351E"
              bgColor2="#885532"
              product
              productType="Running Out"
              icon={brownPerson}
            />
          </Grid>
        </Grid>
        <Box sx={{ marginX: "10px" }}>
          <Typography
            sx={{ marginX: "10px", fontSize: "25px", fontWeight: "bold" }}
          >
            Top Selling Products
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <ProductBox productname={"Skittles"} />
            </Grid>
            <Grid item xs={2}>
              <ProductBox productname={"Skittles"} />
            </Grid>
            <Grid item xs={2}>
              <ProductBox productname={"Skittles"} />
            </Grid>
            <Grid item xs={2}>
              <ProductBox productname={"Skittles"} />
            </Grid>
            <Grid item xs={2}>
              <ProductBox productname={"Skittles"} />
            </Grid>
            <Grid item xs={2}>
              <ProductBox productname={"Skittles"} />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            border: "1px solid black",
            marginY: "5px",
            borderRadius: "15px",
            // height: "200px",
          }}
        >
          <Typography
            sx={{ fontSize: "18px", fontWeight: "bold", margin: "10px" }}
          >
            Products
          </Typography>
          <Box marginX="10px">
            <Table columns={columns} data={list} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
