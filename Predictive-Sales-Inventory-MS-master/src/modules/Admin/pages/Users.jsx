import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useState, useEffect } from "react";
import Table from "../../../shared/Table.tsx";
import { header } from "./Dashboard";
import { ReactComponent as EditIcon } from "../../../assets/svgs/edit.svg";
import TopUser from "../components/UsersComponent/TopUser";
import Drawer from "../../../shared/Drawer";
import AddUser from "../components/UsersComponent/AddUser";
import api from "../../../api/api";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/users").then((response) => {
      const data = response.data.users;
      setLoading(false);
      setUsers(data);
    });
  }, []);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const columns = [
    {
      header: "User's Name",
      key: "username",
      sort: true,
    },
    {
      header: "Role",
      key: "role",
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

  function creatData({ id, username, role, status, date }) {
    return {
      id,
      username: username || "--",
      role: role || "--",
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

  const list = users?.map(
    ({ id, username, role, status, date }) =>
      creatData({
        id,
        username,
        role,
        status,
        date,
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
                  <Table isLoading columns={columns} data={list} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box display="flex" justifyContent="flex-end">
                  <Button variant="contained" onClick={() => setIsOpen(true)}>
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
                  <TopUser
                    username={"Adejolaoluwa Aladegbongbe"}
                    role={"Admin"}
                  />
                  <TopUser
                    username={"Olageshin OluwaShomi"}
                    role={"Stock Manager"}
                  />{" "}
                  <TopUser username={"Oreoluwa"} role={"Cashier"} />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <AddUser open={isOpen} close={() => handleClose()} />
        </>
      )}
    </>
  );
};

export default Users;
