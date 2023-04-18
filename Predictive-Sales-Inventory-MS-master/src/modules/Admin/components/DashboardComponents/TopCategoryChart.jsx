import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Box, Typography } from "@mui/material";

const TopCategoryChart = () => {
  ChartJS.register(ArcElement, Tooltip);

  const backgroundColor = ["#BB2D00", "#4C72F6", "#FF7F11", "#00BB8A"];

  const salesDetails = [
    {
      category: "Beverages",
      total: 200,
    },
    {
      category: "Pasteries",
      total: 600,
    },
    {
      category: "Toiletries",
      total: 800,
    },
    {
      category: "Clothing",
      total: 400,
    },
  ];

  const data = {
    labels: salesDetails.map((x) => [x.category ? x.category : "Uncategoried"]),
    datasets: [
      {
        label: "Sales",
        data: salesDetails.map((x) => [x.total]),
        backgroundColor,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "15px",
          // backgroundColor: "#f5f5f5",
        }}
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: "bold", margin: "8px" }}
        >
          Top Sales Based on Category
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            height: "200px",
            padding: "5px",
          }}
        >
          <Pie data={data} />
          <Box>
            {salesDetails.map((x, index) => (
              <Box paddingY="5px" display="flex">
                <Box
                  sx={{
                    height: "25px",
                    width: "5px",
                    marginTop: "5px",
                    marginRight: "5px",
                    backgroundColor: backgroundColor[index],
                    borderRadius: "2px",
                  }}
                />
                <Box>
                  <Typography>{x.category || "Uncategorized"} </Typography>
                  <Typography>{x.total} </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopCategoryChart;
