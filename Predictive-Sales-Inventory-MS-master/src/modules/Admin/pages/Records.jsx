import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Table from "../../../shared/Table.tsx";
import { header } from "./Dashboard";
import TogglePage from "../../../shared/TogglePage";
import api from "../../../api/api";
import { formatCurrency } from "../../../shared/Categpries";
import { format } from "date-fns";
import EmptyState from "../../../shared/EmptyState";

const Records = () => {
  const pages = ["Sales", "Purchases"];
  const [activeTab, setActiveTab] = useState(0);
  const [sale, setSale] = useState([]);
  const [purchase, setPurchase] = useState([]);

  useEffect(() => {
    getSales();
    getPurchases();
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

  const Purchases = [
    {
      header: "Product ID",
      key: "product",
      sort: true,
    },
    {
      header: "Vendor",
      key: "vendorName",
    },
    {
      header: "Status",
      key: "status",
      sort: true,
      align: "center",
    },
    {
      header: "Amount",
      key: "total",
      sort: true,
      align: "left",
    },
    {
      header: "Date",
      key: "date",
      align: "left",
    },
  ];

  function getPage(activeTab) {
    let result = Sales;
    switch (activeTab) {
      case 0:
        result = Sales;
        return result;
      case 1:
        result = Purchases;
        return result;
      default:
        result = Sales;
        return result;
    }
  }

  const columns = getPage(activeTab);

  const getSales = () => {
    api.get("/api/sales").then((response) => {
      const salesData = response.data.sales;
      // setLoading(false);
      setSale(salesData);
    });
  };

  const getPurchases = () => {
    api.get("/api/purchases").then((response) => {
      console.log(response);
      const purchaseData = response.data;
      // setLoading(false);
      setPurchase(purchaseData);
    });
  };

  function salesData({
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

  function purchaseData({ id, product, vendorName, status, total, date }) {
    return {
      id,
      product: product || "--",
      vendorName: vendorName || "--",
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
      total: formatCurrency(total) || "--",
      date: format(new Date(date), "yyyy-MM-dd") || "--",
    };
  }

  const sales = sale?.map(
    ({ id, product, quantity_before, quantity_after, amount_paid, date }) =>
      salesData({
        id,
        product,
        quantity_before,
        quantity_after,
        amount_paid,
        date,
      }) || []
  );

  const purchases = purchase?.map(
    ({ id, product, vendorName, status, total, date }) =>
      purchaseData({
        id,
        product,
        vendorName,
        status,
        total,
        date,
      }) || []
  );

  const list = activeTab === 0 ? sales : activeTab === 1 && purchases;

  return (
    <>
      <Box marginX="20px" mb={4}>
        <Box display="flex">
          <Typography sx={header} mr={2}>
            Records
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundColor: " #0D81FF1A",
              width: "180px",
              borderRadius: "8px",
              height: "28px",
              paddingY: "8px",
            }}
            mb={4}
          >
            {pages.map((page, index) => (
              <TogglePage
                handleClick={(event) => setActiveTab(index)}
                name={page}
                index={index}
                activeTab={activeTab}
              />
            ))}
          </Box>
        </Box>
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
            {activeTab === 0 && <Table columns={columns} data={list} />}
            {activeTab === 1 && <Table columns={columns} data={list} />}
          </Grid>
        </Grid>
      </Box>
      {(list === undefined || list?.length === 0) && (
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
      )}
    </>
  );
};

export default Records;
