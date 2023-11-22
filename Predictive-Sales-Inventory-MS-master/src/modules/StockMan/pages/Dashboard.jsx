import Typography from "@mui/material/Typography";
import React from "react";
import { header } from "../../Admin/pages/Dashboard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProfileBox from "../../Admin/components/ProfileBox";
import bluePerson from "../../../assets/svgs/bluePerson.svg";
import greenPerson from "../../../assets/svgs/greenPerson.svg";
import brownPerson from "../../../assets/svgs/brownPerson.svg";
import sales from "../../../assets/svgs/sales.svg";
import invoice from "../../../assets/svgs/invoice.svg";

const Dashboard = () => {
  return (
    <>
      <Box marginX="20px" marginBottom="5px">
        <Typography sx={header}>Dashboard</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <ProfileBox
              number="10"
              bgColor="#009DDC"
              bgColor2="#0086BB"
              product
              productType="In Stock"
              icon={bluePerson}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ProfileBox
              number="8"
              bgColor="#009B72"
              bgColor2="#00BB8A"
              product
              productType="Sold Out"
              icon={greenPerson}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ProfileBox
              number="2"
              bgColor="#56351E"
              bgColor2="#885532"
              product
              productType="Running Out"
              icon={brownPerson}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
