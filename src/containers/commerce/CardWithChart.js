import { Box, CssBaseline, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import React from "react";
const numeral = require("numeral");
export default function MiniCardWithChart(props) {
  const data = props.data;
  const series = [{
                name: "Desktop",
                data: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
                opacity: 0,
                show: false
            }]
  const options = {
    chart: {
      height: 200,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    legend: {
      show: false
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
          show: false,
      },
      axisTicks: {
          show: false,
      },
    }
  }
  return (
    <Box
      sx={{
        p: 3,
        boxShadow:
          "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        borderRadius: 2,
        backgroundColor: " rgb(255, 255, 255)",
        color: "rgb(33, 43, 54)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: "600",
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            fontSize: 27,
            fontWeight: "bold",
            mt: 1,
          }}
        >
          {numeral(data.total).format(0, 0)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: 1,
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor:
                data.renge > 0
                  ? "rgba(84, 214, 44, 0.16)"
                  : "rgba(255, 72, 66, 0.16)",
              color: data.renge > 0 ? "rgb(84, 214, 44)" : "rgb(255, 72, 66)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={data.renge > 0 ? "/plusRenge.svg" : "minusRenge.svg"} />
          </Box>
          <Typography>
            {data.renge > 0 ? "+" + data.renge + "%" + " than last week" : "" + data.renge + "%" + " than last week"}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid #fff",
        }}
      >
        <ReactApexChart options={options} series={series} type="line" height={150} width={150} />
      </Box>
    </Box>
  );
}
