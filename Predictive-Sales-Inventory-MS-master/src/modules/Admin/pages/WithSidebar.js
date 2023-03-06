import { Container, Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../../shared/NavBar";
import PersonalizedAppBar from "../../../shared/PersonalizedAppBar";

const WithSidebar = () => {
  return (
    <>
      <NavBar />
      <Container
        sx={{
          width: "100%",
          // pt: 15,
          pl: { xs: 3, md: "212px" },
          // pr: { xs: 3, md: 2 },
          position: "absolute",
        }}
        maxWidth="xl"
      >
        <PersonalizedAppBar />
        <Box sx={{ paddingTop: 20 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default WithSidebar;
