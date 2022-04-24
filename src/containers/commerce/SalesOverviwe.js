import { Box, Typography } from '@mui/material';
import React from 'react';
const numeral = require("numeral");
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
function SalesOverviwe() {
    // const series= [{
    //           data: [110, 864, 740],
    //         }]
    // const options= {
    //           chart: {
    //             type: 'bar',
    //             height: 300,
    //           },
              
    //           plotOptions: {
    //             bar: {
    //               barHeight: '10%',
    //               borderRadius: 4,
    //               horizontal: true,
    //               colors: {
                //       ranges: [
                //     {
                //         from: 0,
                //         to: 110,
                //         color: "#00AB55",
                //     },
                //     {
                //         from: 120,
                //         to: 740,
                //         color: "#FFC107",
                //     },
                //     {
                //         from: 750,
                //         to: 864,
                //         color: "#1890FF",
                //     }
                // ],
    //                 backgroundBarColors: ["#C8FACD", "#A7D4FF", "#FFE7A0"],
    //                 backgroundBarOpacity: 0.6,
    //                 backgroundBarRadius: 4,
    //               }
    //             }
    //           },
    //           dataLabels: {
    //             enabled: false
    //           },
    //         }

    const series= [{
              data: [86]
            }]
    const options= {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  barHeight: '100%',
                  borderRadius: 4,
                  horizontal: true,
                  colors: {
                      ranges: [
                    {
                        from: 1,
                        to: 86,
                        color: "#00AB55",
                    },
                ],
                    backgroundBarColors: ["#C8FACD"],
                    backgroundBarOpacity: 0.6,
                    backgroundBarRadius: 4,
                  }
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                max: 1000,
                categories: ["Total Profit",],
                 labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
              },
              yaxis: {
                 labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
              },
                 grid: {
                show: false
                },
            }
    const series1= [{
        data: [864]
    }]
    const options1= {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  barHeight: '100%',
                  borderRadius: 4,
                  horizontal: true,
                  colors: {
                      ranges: [
                    {
                        from: 0,
                        to: 864,
                        color: "#1890FF",
                    },
                ],
                    backgroundBarColors: ["#A7D4FF",],
                    backgroundBarOpacity: 0.6,
                    backgroundBarRadius: 4,
                  }
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                max: 1000,
                categories: ["Total Income",],
                 labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
              },
              yaxis: {
                 labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
              },
                 grid: {
                show: false
                },
            }
    const series2= [{
        data: [740]
    }]
    const options2= {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  barHeight: '100%',
                  borderRadius: 4,
                  horizontal: true,
                  colors: {
                      ranges: [
                    {
                        from: 0,
                        to: 740,
                        color: "#FFC107",
                    }
                ],
                    backgroundBarColors: ["#FFE7A0"],
                    backgroundBarOpacity: 0.6,
                    backgroundBarRadius: 4,
                  }
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                max: 1000,
                categories: ["Total Expenses",
                ],
                 labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
              },
              yaxis: {
                 labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
              },
                 grid: {
                show: false
                },
            }
    return (
        <Box sx={{boxShadow:
          "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        borderRadius: 2,
        backgroundColor: " rgb(255, 255, 255)",
        color: "rgb(33, 43, 54)",
        padding: 3,
        }}>
            <Typography variant='h5' sx={{fontWeight: "bold"}}>Sales Overview</Typography>
            <Box>
            <Box>
                <Box sx={{display: "flex", justifyContent: "space-between", marginBottom: 2, marginTop: 2}}>
                <Typography>Total Profit</Typography>
                <Box sx={{display: "flex", gap: 1}}>
                    <Typography>{numeral(1619).format("$0,0.00")}</Typography>
                    <Typography sx={{color: "gray"}}>({numeral(0.086).format("0.0%")})</Typography>
                </Box>
            </Box>
            <ReactApexChart options={options} series={series} type="bar" height={50} />
            </Box>
            <Box>
                <Box sx={{display: "flex", justifyContent: "space-between", marginBottom: 2, marginTop: 2}}>
                <Typography>Total Income</Typography>
                <Box sx={{display: "flex", gap: 1}}>
                    <Typography>{numeral(3571).format("$0,0")}</Typography>
                    <Typography sx={{color: "gray"}}>({numeral(0.864).format("0.0%")})</Typography>
                </Box>
            </Box>
            <ReactApexChart options={options1} series={series1} type="bar" height={50} />
            </Box>
            <Box>
                <Box sx={{display: "flex", justifyContent: "space-between", marginBottom: 2, marginTop: 2}}>
                <Typography>Total Expenses</Typography>
                <Box sx={{display: "flex", gap: 1}}>
                    <Typography>{numeral(3430).format("$0,0.00")}</Typography>
                    <Typography sx={{color: "gray"}}>({numeral(0.74).format("0.0%")})</Typography>
                </Box>
            </Box>
            <ReactApexChart options={options2} series={series2} type="bar" height={50} />
            </Box>
            </Box>
        </Box>
    );
}

export default SalesOverviwe;