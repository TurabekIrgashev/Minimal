import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function BalanceStatistics(props) {
  const series = [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid item xs={12} md={8}>
      <Box
        sx={{
          color: "rgb(33, 43, 54)",
          lineHeight: 1.5,
          fontSize: "1rem",
          fontFamily: "Public Sans, sans-serif",
          fontWeight: 400,
          backgroundColor: "rgb(255, 255, 255)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          boxShadow:
            "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "left",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                lineHeight: 1.55556,
                fontSize: "1.0625rem",
                fontFamily: "Public Sans, sans-serif",
              }}
              variant="p"
            >
              Balance Statistics
            </Typography>
            <Typography
              sx={{
                margin: "4px 0px 0px",
                lineHeight: 1.57143,
                fontSize: "0.875rem",
                fontFamily: "Public Sans, sans-serif",
                fontWeight: 400,
                color: "rgb(99, 115, 129)",
              }}
              variant="p"
            >
              (+43% Income | +12% Expense) than last year
            </Typography>
          </Box>
          <Box>
            <FormControl
              sx={{
                padding: 0,
                minWidth: 80,
                maxHeight: 80,
                overflow: "hidden",
                backgroundColor: "#F3F5F7",
                outline: "none",
                border: "none",
              }}
            >
              <Select
                sx={{
                  padding: 0,
                }}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem
                  sx={{
                    padding: 0,
                  }}
                  value=""
                >
                  <em>Year</em>
                </MenuItem>
                <MenuItem value={10}>Week</MenuItem>
                <MenuItem value={20}>Month</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ width: "100%", marginTop: 4 }}>
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={400}
          />
        </Box>
      </Box>
    </Grid>
  );
}
export default BalanceStatistics;
