import React from "react";
import { ChartBullet, ChartAxis } from "@patternfly/react-charts";
import { Box } from "@mui/material";

const SalesBulletChart = () => {
  return (
    <Box>
      <ChartBullet
        ariaDesc="Sales Target"
        ariaTitle="Monthly Sales Target"
        axisComponent={
          <ChartAxis
            tickValues={[0, 25, 50, 75, 100]}
            tickFormat={(val) => {
              switch (val) {
                case 0:
                  return "New Month";
                case 25:
                  return "Week 1";
                case 50:
                  return "Week 2";
                case 75:
                  return "Week 3";
                case 100:
                  return "Week 4";
              }
            }}
          />
        }
        comparativeWarningMeasureData={[{ name: "Set Target", y: 88 }]}
        comparativeWarningMeasureLegendData={[{ name: "Set Target" }]}
        constrainToVisibleArea
        height={400}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart10"
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 400,
          right: 50,
          top: 50,
        }}
        primarySegmentedMeasureData={[{ name: "Current Sales", y: 15 }]}
        primarySegmentedMeasureLegendData={[{ name: " Current Sales" }]}
        qualitativeRangeData={[
          { name: "Range", y: 25 },
          { name: "Range", y: 50 },
          { name: "Range", y: 75 },
          { name: "Range", y: 100 },
        ]}
        qualitativeRangeLegendData={[
          { name: "WK1" },
          { name: "WK2" },
          { name: "WK3" },
          { name: "WK4" },
        ]}
        subTitle="The amount of Sales every month"
        title="Sales Target"
        width={500}
      />
    </Box>
  );
};

export default SalesBulletChart;
