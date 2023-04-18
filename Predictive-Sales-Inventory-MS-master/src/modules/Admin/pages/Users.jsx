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
import TopUser from "../components/UsersComponent/TopUser";
import Drawer from "../../../shared/Drawer";
import AddUser from "../components/UsersComponent/AddUser";
import api from "../../../api/api";
import EmptyState from "../../../shared/EmptyState";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState();

  useEffect(() => {
    api.get("/api/users").then((response) => {
      const data = response.data.users;
      setLoading(false);
      setUsers(data);
      setTopUsers(data.slice(0, 3));
    });
  }, []);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const getDeactivateId = (row) => {
    console.log(row.id);
    setId(row?.id);
  };

  const deactivateUser = () => {
    api.put(`api/deactivate/${id}`).then((response) => {
      console.log(response);
      window.location.reload();
    });
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
      align: "center",
    },
    {
      header: "Action",
      key: "action",
      align: "center",
    },
  ];

  function creatData({ _id, username, role, status, action }) {
    return {
      _id: _id,
      username: username || "--",
      role: role || "--",
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
      action:
        status?.toLowerCase() === "active" ? (
          <Button
            variant="outlined"
            color="warning"
            onClick={() => deactivateUser()}
          >
            Deactivate
          </Button>
        ) : (
          <Button variant="outlined" color="warning">
            Delete
          </Button>
        ),
    };
  }

  const list = users?.map(
    ({ _id, username, role, status, action }) =>
      creatData({
        _id,
        username,
        role,
        status,
        action,
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
                  <Table
                    isLoading
                    columns={columns}
                    data={list}
                    onRowItemClick={(row) => console.log(row)}
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
                  {topUsers.map((topUser) => (
                    <TopUser username={topUser.username} role={topUser.role} />
                  ))}
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
