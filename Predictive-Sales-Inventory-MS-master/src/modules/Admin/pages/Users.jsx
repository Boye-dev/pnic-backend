import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import Table from "../../../shared/Table.tsx";
import { header } from "./Dashboard";
import { ReactComponent as EditIcon } from "../../../assets/svgs/edit.svg";
import TopUser from "../components/UsersComponent/TopUser";

const budgetItems = [
  {
    id: 1,
    name: "Adejola",
    user_role: "Admin",
    status: "Active",
    date: "22/10/22",
  },
  {
    id: 2,
    name: "Adejola",
    user_role: "Cashier",
    status: "Inactive",
    date: "22/10/22",
  },
  {
    id: 3,
    name: "Adejola",
    user_role: "Admin",
    status: "Active",
    date: "22/10/22",
  },
  {
    id: 4,
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
      align: "center",
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
      <Box marginX="20px">
        <Typography sx={header}>Users</Typography>
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
                Top Users
              </Typography>
              <TopUser username={"Adejolaoluwa Aladegbongbe"} role={"Admin"} />
              <TopUser
                username={"Olageshin OluwaShomi"}
                role={"Stock Manager"}
              />{" "}
              <TopUser username={"Oreoluwa"} role={"Cashier"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Users;
