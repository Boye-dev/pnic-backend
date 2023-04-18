import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { header } from "../../Admin/pages/Dashboard";
import Table from "../../../shared/Table.jsx";
import api from "../../../api/api";
import EmptyState from "../../../shared/EmptyState";
import { ReactComponent as EditIcon } from "../../../assets/svgs/edit.svg";
import { useNavigate } from "react-router-dom";
import { BasePaths, CashierPaths } from "../../../routes/paths";

const Sales = () => {
  const [sale, setSales] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSales();
  }, []);

  const Sales = [
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

  const getSales = () => {
    api.get("/api/sales").then((response) => {
      const salesData = response.data.sales;
      // setLoading(false);
      setSales(salesData);
    });
  };

  function createData({
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

  const sales = sale?.map(
    ({ id, product, quantity_before, quantity_after, amount_paid, date }) =>
      createData({
        id,
        product,
        quantity_before,
        quantity_after,
        amount_paid,
        date,
      }) || []
  );

  return (
    <Box marginX="20px">
      <Box display="flex" justifyContent="space-between">
        <Typography sx={header}> Daily Sales </Typography>
        <Button
          sx={{ marginBottom: "10px" }}
          variant="contained"
          onClick={() => navigate(CashierPaths.ADDSALES)}
        >
          <EditIcon />
        </Button>
      </Box>
      <Box
        sx={{
          border: "1px solid #FF7F11",
          borderRadius: "15px",
          padding: "10px",
        }}
      >
        <Table
          columns={Sales}
          data={sales}
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
                <EmptyState emptyText="No Sales Today" />
              </Box>
            </>
          }
        />
      </Box>
    </Box>
  );
};

export default Sales;
