import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import React from "react";
import Table from "../../../shared/Table.tsx";

const budgetItems = [
  {
    id: 1,
    name: "Adejola",
    user_role: "Admin",
    status: "Active",
    date: "22/10/22",
  },
  {
    id: 1,
    name: "Adejola",
    user_role: "Cashier",
    status: "Inactive",
    date: "22/10/22",
  },
  {
    id: 1,
    name: "Adejola",
    user_role: "Admin",
    status: "Active",
    date: "22/10/22",
  },
  {
    id: 1,
    name: "Adejola",
    user_role: "Admin",
    status: "Active",
    date: "22/10/22",
  },
];

const Users = () => {
  const columns = [
    {
      header: "User's Name",
      key: "name",
      sort: true,
    },
    {
      header: "Role",
      key: "user_role",
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

  function creatData({ id, name, user_role, status, date }) {
    return {
      id,
      name: name || "--",
      user_role: user_role || "--",
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
    ({ id, name, user_role, status, date }) =>
      creatData({
        id,
        name,
        user_role,
        status,
        date,
      }) || []
  );
  return (
    <>
      <Typography component="h1">Users</Typography>
      <Grid container>
        <Grid item xs={8}>
          <Table columns={columns} data={list} />
        </Grid>
      </Grid>
    </>
  );
};

export default Users;
