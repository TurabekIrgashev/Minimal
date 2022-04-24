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

function ExpensesCategories(props) {
  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];

  const options = {
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
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
        }}
      >
        <Box sx={{ padding: 4, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              width: "100%",
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
              Expenses Categories
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              marginTop: 5,
            }}
          >
            <ReactApexChart
              options={options}
              series={series}
              height={300}
              type="polarArea"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            borderTop: "1px solid #E5E8EB",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderLeft: "1px solid #E5E8EB",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              padding: 1,
            }}
          >
            <Typography
              sx={{
                margin: "0px 0px 8px",
                color: "rgb(99, 115, 129)",
                lineHeight: 1.57143,
                fontSize: "0.875rem",
                fontFamily: "Public Sans, sans-serif",
                fontWeight: 400,
              }}
            >
              Categories
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                lineHeight: 1.5,
                fontSize: "1.25rem",
                fontFamily: "Public Sans, sans-serif",
              }}
            >
              9
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              borderLeft: "1px solid #E5E8EB",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              padding: 1,
            }}
          >
            <Typography
              sx={{
                margin: "0px 0px 8px",
                color: "rgb(99, 115, 129)",
                lineHeight: 1.57143,
                fontSize: "0.875rem",
                fontFamily: "Public Sans, sans-serif",
                fontWeight: 400,
              }}
            >
              Categories
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                lineHeight: 1.5,
                fontSize: "1.25rem",
                fontFamily: "Public Sans, sans-serif",
              }}
            >
              $18.875
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default ExpensesCategories;
