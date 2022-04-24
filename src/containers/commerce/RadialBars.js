import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
const numeral = require("numeral");
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function RadialBars() {

  const series= [44, 75]
  
  const options= {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 15,
                    size: "70%"
                    },
                  dataLabels: {
                    name: {
                      fontSize: '30px',
                    },
                    value: {
                      fontSize: '30px',
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return numeral(2324).format(0,0)
                      }
                    }
                  }
                }
              },
              stroke: {
                lineCap: "round",
              },
              labels: ['Mens', 'Womens'],
            }

  return (
    <Box sx={{boxShadow:
          "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        borderRadius: 2,
        backgroundColor: " rgb(255, 255, 255)",
        color: "rgb(33, 43, 54)",}}>
      <ReactApexChart options={options} series={series} type="radialBar" height={350} />
      <Box sx={{border: "1px solid #E5E8EB", width: "100%", }}></Box>
      <Box sx={{display: "flex", justifyContent: 'space-around', padding: 3}}>
        <Box sx={{display: "flex", gap: 1}}>
          <Box sx={{width: "20px", height: '20px', borderRadius: "50%", backgroundColor: "#247DC2"}}></Box>
          <Typography>Mens</Typography>
        </Box>
        <Box sx={{display: "flex", gap: 1}}>
          <Box sx={{width: "20px", height: '20px', borderRadius: "50%", backgroundColor: "#24B181"}}></Box>
          <Typography>Womens</Typography>
        </Box>
      </Box>
    </Box>
  );
}
