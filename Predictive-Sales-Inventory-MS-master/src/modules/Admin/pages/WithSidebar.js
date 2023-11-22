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
          width: `calc(100 % -212)`,
          pl: { xs: 3, md: "212px", sm: "212px" },
          position: "absolute",
        }}
        maxWidth="xl"
      >
        <PersonalizedAppBar />
        <Box sx={{ paddingTop: 10, position: "relative" }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default WithSidebar;
