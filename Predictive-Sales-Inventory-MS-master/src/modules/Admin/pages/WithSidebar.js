import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../../shared/NavBar";

const WithSidebar = () => {
  return (
    <>
      <NavBar />
      <Container
        sx={{
          width: "100%",
          pt: 15,
          pl: { xs: 3, md: "212px" },
          pr: { xs: 3, md: 2 },
        }}
        maxWidth="xl"
      >
        <Outlet />
      </Container>
    </>
  );
};

export default WithSidebar;
