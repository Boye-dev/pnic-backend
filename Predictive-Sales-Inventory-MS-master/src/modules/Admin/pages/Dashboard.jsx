import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProfileBox from "../components/ProfileBox";

const Dashboard = () => {
  return (
    <div>
      <Box marginX="57px">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ProfileBox />
          </Grid>
          <Grid item xs={4}>
            <ProfileBox />
          </Grid>
          <Grid item xs={4}>
            <ProfileBox />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
