import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useState, useEffect } from "react";
import Table from "../../../shared/Table.jsx";
import { header } from "./Dashboard";
import { ReactComponent as EditIcon } from "../../../assets/svgs/edit.svg";
import ProductBox from "../components/ProductsComponent/ProductBox";
import NewProduct from "../components/ProductsComponent/NewProduct";
import { formatCurrency } from "../../../shared/Categpries";
import api from "../../../api/api";
import EmptyState from "../../../shared/EmptyState";
import { AdminPaths } from "../../../routes/paths";
import { useNavigate } from "react-router-dom";
import ProductAction from "../components/ProductsComponent/ProductAction.jsx";

export const columns = [
  {
    header: "Product",
    key: "name",
    sort: true,
  },
  {
    header: "Amount",
    key: "price",
  },
  {
    header: "Quantity",
    key: "unit",
  },
  {
    header: "Category",
    key: "category",
    sort: true,
    align: "left",
  },
  {
    header: "Status",
    key: "status",
    sort: true,
  },
];

const Products = ({ cashier }) => {
  const [newProductDrawer, setNewProductDrawer] = useState(false);
  const [updateProduct, setUpdateProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/api/products")
      .then((response) => {
        const data = response.data.products;
        setLoading(false);
        setProducts(data);
        const sortedItems = data.sort((a, b) => b.sales - a.sales);
        const topThreeItems = sortedItems.slice(0, 3);
        setTopProducts(topThreeItems);
      })
      .catch((error) => {
        setLoading(true);
      });
  }, []);

  const handleDrawer = () => {
    setNewProductDrawer(!newProductDrawer);
  };

  const updateDrawer = () => {
    setUpdateProduct(!updateProduct);
  };

  const getId = (row) => {
    setId(row?._id);
  };
  console.log(id);

  function creatData({ _id, name, price, unit, status, category }) {
    return {
      _id,
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
    ({ _id, name, price, unit, status, category }) =>
      creatData({
        _id,
        name,
        price,
        unit,
        status,
        category,
      }) || []
  );
  return (
    <>
      {loading ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            marginTop: "20%",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={50} color="primary" />
        </Box>
      ) : (
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
                  <Table
                    columns={columns}
                    data={list}
                    onRowItemClick={(row) => {
                      getId(row);
                      updateDrawer(true);
                    }}
                    empty={
                      <>
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "10%",
                            textAlign: "center",
                          }}
                        >
                          <EmptyState emptyText="No Record Available" />
                        </Box>
                      </>
                    }
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box display="flex" justifyContent="flex-end">
                  {cashier ? (
                    ""
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => handleDrawer(true)}
                    >
                      <EditIcon />
                    </Button>
                  )}
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
                  {topProducts?.map((topProduct) => (
                    <ProductBox productname={topProduct.name} />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
          <NewProduct open={newProductDrawer} close={() => handleDrawer()} />
          <ProductAction
            open={updateProduct}
            close={() => updateDrawer()}
            productId={id}
          />
        </>
      )}
    </>
  );
};

export default Products;
