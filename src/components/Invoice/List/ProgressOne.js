import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function ProgressOne(props) {
  const seriesOne = [props.percent];

  const optionsOne = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    theme: {
      monochrome: {
        enabled: true,
        color: `${props.color}`,

        shadeTo: "light",
        shadeIntensity: 1.65,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: [props.label],
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ReactApexChart
        options={optionsOne}
        series={seriesOne}
        type="radialBar"
        height={130}
        sx={{
          padding: 0,
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          padding: 2,
          margin: 2,
          borderRight: "1px dashed #E5E8EB",
        }}
      >
        <Typography
          sx={{
            margin: "0px",
            fontWeight: 700,
            lineHeight: 1.55556,
            fontSize: "1.0625rem",
            fontFamily: "Public Sans, sans-serif",
          }}
          variant="h6"
        >
          {props.label}
        </Typography>
        <Typography
          noWrap
          sx={{
            margin: "0px",
            fontWeight: 700,
            lineHeight: 1.55556,
            fontSize: "1.0625rem",
            fontFamily: "Public Sans, sans-serif",
          }}
          variant="h6"
        >
          {props.number}{" "}
          <Typography
            sx={{
              color: "rgb(99, 115, 129)",
              lineHeight: 1.57143,
              fontSize: "0.875rem",
              fontFamily: "Public Sans, sans-serif",
              fontWeight: 400,
            }}
            variant="span"
          >
            invoice
          </Typography>
        </Typography>
        <Typography
          sx={{
            margin: "0px",
            fontWeight: 600,
            lineHeight: 1.55556,
            fontSize: "1.0625rem",
            color: `${props.color}`,
            fontFamily: "Public Sans, sans-serif",
          }}
          variant="h6"
        >
          ${Math.ceil(933 * (props.percent / 100))}
        </Typography>
      </Box>
    </Box>
  );
}
export default ProgressOne;
