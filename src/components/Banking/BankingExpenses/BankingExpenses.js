import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function BankingExpenses(props) {
  const series = [
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  fill: {
    colors: ["#F44336", "#E91E63", "#9C27B0"];
  }
  const options = {
    chart: {
      width: "100%",
      height: 350,
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#B78103"],
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },

    grid: {
      show: false,
      // row: {
      //   colors: ["#F44336", "#E91E63", "#9C27B0"],
      // },
      // column: {
      //   colors: ["#F44336", "#E91E63", "#9C27B0"],
      // },
    },
    legend: {
      show: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <Grid item xs={12} sm={6}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          width: "100%",
          borderRadius: 5,
          alignItem: "center",
          flexDirection: "column",
          backgroundColor: "#FFF7CD",
          color: "#7A4F01",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: 3,
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                lineHeight: "1.5",
                fontSize: "0.875rem",
              }}
              variant="h6"
            >
              Expenses
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                lineHeight: "1.5",
                fontSize: "1.675rem",
                marginTop: "8px",
              }}
              variant="h6"
            >
              $8,938
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                lineHeight: "1.5",
                fontSize: "1.675rem",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                marginTop: "8px",
              }}
              variant="h6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-1t9pz9x iconify iconify--eva"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21 12a1 1 0 0 0-2 0v2.3l-4.24-5a1 1 0 0 0-1.27-.21L9.22 11.7L4.77 6.36a1 1 0 1 0-1.54 1.28l5 6a1 1 0 0 0 1.28.22l4.28-2.57l4 4.71H15a1 1 0 0 0 0 2h5a1.1 1.1 0 0 0 .36-.07l.14-.08a1.19 1.19 0 0 0 .15-.09a.75.75 0 0 0 .14-.17a1.1 1.1 0 0 0 .09-.14a.64.64 0 0 0 .05-.17A.78.78 0 0 0 21 17Z"
                ></path>
              </svg>
              <Typography
                sx={{
                  fontWeight: "600",
                  lineHeight: "1.5",
                  fontSize: "0.875rem",
                }}
                variant="span"
              >
                -0.5%
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  lineHeight: "1.57",
                  opacity: 0.7,
                  fontSize: "0.875rem",
                }}
                variant="span"
              >
                than last month
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              padding: 2,
              backgroundColor: "#B78103",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "48px",
              height: "48px",
              color: "#FFF7CD",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="MuiBox-root css-9uy14h iconify iconify--eva"
              sx="[object Object]"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"
              ></path>
            </svg>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={180}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default BankingExpenses;
