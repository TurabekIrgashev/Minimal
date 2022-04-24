import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function BankingIncome(props) {
  const series = [
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];
  const options = {
    chart: {
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
    colors: ["#007B55"],
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

          borderRadius: 5,
          alignItem: "center",
          flexDirection: "column",
          backgroundColor: "#C8FACD",
          color: "#005249",
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
              Income
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
              $18,765
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
                className="MuiBox-root mr-3 css-1t9pz9x iconify iconify--eva"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21 7a.78.78 0 0 0 0-.21a.64.64 0 0 0-.05-.17a1.1 1.1 0 0 0-.09-.14a.75.75 0 0 0-.14-.17l-.12-.07a.69.69 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71l-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34l4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0V7Z"
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
                +2.6%
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
              backgroundColor: "#007B55",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "48px",
              height: "48px",
              color: "#C8FACD",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="MuiBox-root css-9uy14h  iconify iconify--eva"
              sx={{
                fontWeight: "bold",
                fontSize: "1.675rem",
              }}
              width="3em"
              height="3em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.71 6.29a1 1 0 0 0-1.42 0L8 14.59V9a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H9.41l8.3-8.29a1 1 0 0 0 0-1.42Z"
              ></path>
            </svg>
          </Box>
        </Box>
        <Box>
          <ReactApexChart
            style={{
              padding: 0,
              margin: 0,
              width: "100%",
            }}
            options={options}
            series={series}
            type="area"
            height={180}
            width="100%"
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default BankingIncome;
