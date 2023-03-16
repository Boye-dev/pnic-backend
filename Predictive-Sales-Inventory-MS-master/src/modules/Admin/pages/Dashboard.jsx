import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProfileBox from "../components/ProfileBox";
import MiniUserList from "../components/DashboardComponents/MiniUserList";
import NumericDetails from "../components/DashboardComponents/NumericDetails";
import PurchaseSummary from "../components/DashboardComponents/PurchaseSummary";
import bluePerson from "../../../assets/svgs/bluePerson.svg";
import greenPerson from "../../../assets/svgs/greenPerson.svg";
import brownPerson from "../../../assets/svgs/brownPerson.svg";
import sales from "../../../assets/svgs/sales.svg";
import invoice from "../../../assets/svgs/invoice.svg";
import { Typography } from "@mui/material";

export const header = {
  color: "#2364AA",
  fontSize: "32px",
  fontWeight: "bold",
};

const Dashboard = () => {
  return (
    <div>
      <Box marginX="20px" marginBottom="5px">
        <Typography sx={header}>Dashboard</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <ProfileBox
              number="10"
              bgColor="#009DDC"
              bgColor2="#0086BB"
              userType="Total"
              icon={bluePerson}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ProfileBox
              number="8"
              bgColor="#009B72"
              bgColor2="#00BB8A"
              userType="Active"
              icon={greenPerson}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ProfileBox
              number="2"
              bgColor="#56351E"
              bgColor2="#885532"
              userType="Active"
              icon={brownPerson}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <MiniUserList />
          </Grid>
          <Grid item md={8} container direction="column" spacing={2}>
            <Grid item container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <NumericDetails
                  num="112"
                  icon={invoice}
                  iconBgColor="#2364AA"
                  countType="Total Invoices"
                  bColor="blue"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <NumericDetails
                  num="546"
                  icon={sales}
                  iconBgColor="#56351E"
                  countType="Total Sales"
                  bColor="#56351E"
                />
              </Grid>
            </Grid>
            <Grid item>
              <PurchaseSummary />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
