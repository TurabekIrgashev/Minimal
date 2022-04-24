import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import dynamic from "next/dynamic";
import ProgressOne from "./ProgressOne";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  BsArrowDownLeft,
  BsThreeDotsVertical,
  BsArrowUpRight,
} from "react-icons/bs";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function List(props) {
  const [value, setValue] = React.useState(new Date());
  const [valueEnd, setValueEnd] = React.useState(new Date());

  const [valueTabs, setValueTabs] = React.useState("1");
  const top100Films = [
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
      label: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
  ];

  const handleChange = (event, newValue) => {
    setValueTabs(newValue);
  };
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              margin: "0px 0px 8px",
              fontWeight: 700,
              lineHeight: 1.5,
              fontSize: "1.25rem",
              fontFamily: "Public Sans, sans-serif",
            }}
          >
            Invoice List
          </Typography>
          <ul style={{ display: "flex", gap: 10, padding: 0 }}>
            <li
              style={{
                margin: "0px",
                fontSize: "0.875rem",
                fontFamily: "Public Sans, sans-serif",
                fontWeight: 400,
                textDecoration: "none",
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                color: "rgb(33, 43, 54)",
                listStyleType: "square",
              }}
            >
              Dashboard
            </li>
            <li
              style={{
                margin: "0px",
                fontSize: "0.875rem",
                fontFamily: "Public Sans, sans-serif",
                fontWeight: 400,
                textDecoration: "none",
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                color: "rgb(33, 43, 54)",
                listStyleType: "square",
              }}
            >
              Invoices
            </li>
            <li
              style={{
                margin: "0px",
                fontSize: "0.875rem",
                fontFamily: "Public Sans, sans-serif",
                fontWeight: 400,
                textDecoration: "none",
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                color: "rgb(145, 158, 171)",
                listStyleType: "square",
              }}
            >
              Lists
            </li>
          </ul>
        </Box>
        <Box>
          <Button
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              boxSizing: "border-box",
              webkitTapHighlightColor: "transparent",
              outline: "0px",
              border: "0px",
              margin: "0px",
              cursor: "pointer",
              userSelect: "none",
              verticalAlign: "middle",
              appearance: "none",
              textDecoration: "none",
              fontWeight: 700,
              lineHeight: 1.71429,
              fontSize: "0.875rem",
              textTransform: "capitalize",
              fontFamily: "Public Sans, sans-serif",
              minWidth: "64px",
              padding: "6px 16px",
              borderRadius: "8px",
              transition:
                "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(0, 171, 85)",
              boxShadow: "rgb(0 171 85 / 24%) 0px 8px 16px 0px",
              "&:hover": {
                backgroundColor: "#319476",
              },
            }}
            variant="contained"
          >
            <AiOutlinePlus /> New Invoice
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(33, 43, 54)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          backgroundImage: "none",
          overflow: "hidden",
          position: "relative",
          boxShadow:
            " rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
          borderRadius: "16px",
          zIndex: 0,
          marginBottom: "40px",
        }}
      >
        <ProgressOne
          percent={70}
          color={"#90C6F8"}
          label="Invoice"
          number={16}
        />
        <ProgressOne percent={20} color={"#AAE59B"} number={10} label="Paid" />
        <ProgressOne percent={50} color={"#F6DB8A"} number={7} label="Unpaid" />
        <ProgressOne
          percent={60}
          color={"#F6A6A5"}
          number={12}
          label="Overdue"
        />
        <ProgressOne percent={80} color={"#637381"} number={15} label="Draft" />
      </Box>
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
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                overflow: "hidden",
                minHeight: "48px",
                display: "flex",
                paddingLeft: "16px",
                paddingRight: "16px",
                backgroundColor: "rgb(244, 246, 248)",
                borderBottom: 1,
                width: "100%",
                borderRadiusTop: 4,
                borderColor: "divider",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Item One" value="1" />
                <Tab label="Item Two" value="2" />
                <Tab label="Item Three" value="3" />
              </TabList>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "20px 24px",
                gap: 2,
              }}
            >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300, borderRadius: 3 }}
                renderInput={(params) => (
                  <TextField {...params} label="Service Type" />
                )}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Start Date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="End Date"
                  value={valueEnd}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
              <TextField
                id="outlined-basic"
                label="Search client or invoice number"
                variant="outlined"
                sx={{
                  width: "80%",
                }}
              />
            </Box>
            <Box>
              <Box sx={{ width: "100%", marginTop: 3 }}>
                <TableContainer
                  sx={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  component={Paper}
                >
                  <Table aria-label="caption table">
                    <TableHead
                      sx={{
                        lineHeight: "1.5rem",
                        fontSize: "0.875rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        verticalAlign: "inherit",
                        textAlign: "left",
                        padding: "16px",
                        borderBottom: "none",
                        color: "rgb(99, 115, 129)",
                        backgroundColor: "rgb(244, 246, 248)",
                      }}
                    >
                      <TableRow
                        sx={{
                          width: "100%",
                        }}
                      >
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            color: "rgb(99, 115, 129)",
                          }}
                        >
                          Description
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            color: "rgb(99, 115, 129)",
                          }}
                          align="right"
                        >
                          Date
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            color: "rgb(99, 115, 129)",
                          }}
                          align="right"
                        >
                          Amount
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            color: "rgb(99, 115, 129)",
                          }}
                          align="right"
                        >
                          Status
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            color: "rgb(99, 115, 129)",
                          }}
                          align="right"
                        >
                          {" "}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          component="th"
                          scope="row"
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Box sx={{ position: "relative" }}>
                              <Avatar
                                sx={{ width: "50px", height: "50px" }}
                                src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg"
                              />
                              <Box
                                sx={{
                                  position: "absolute",
                                  height: "20px",
                                  width: "20px",
                                  borderRadius: "50%",
                                  bottom: "0",
                                  right: "-5px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "white",
                                  backgroundColor: "green",
                                }}
                              >
                                <BsArrowDownLeft
                                  sx={{ height: "100%", width: "100%" }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "start",
                                flexDirection: "column",
                                gap: 1,
                              }}
                            >
                              <Typography
                                sx={{
                                  margin: "4px 0px 0px",
                                  lineHeight: 1.57143,
                                  fontSize: "0.875rem",
                                  fontFamily: "Public Sans, sans-serif",
                                  fontWeight: 200,
                                  color: "rgb(99, 115, 129)",
                                }}
                                variant="p"
                              >
                                Receive money from
                              </Typography>
                              <Typography
                                sx={{
                                  margin: "0px",
                                  fontWeight: 700,
                                  lineHeight: 1,
                                  fontSize: "1.0625rem",
                                  fontFamily: "Public Sans, sans-serif",
                                }}
                                variant="p"
                              >
                                Annette Black
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              flexDirection: "column",
                              gap: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                margin: "0px",
                                fontWeight: 700,
                                lineHeight: 1,
                                fontSize: "1.0625rem",
                                fontFamily: "Public Sans, sans-serif",
                              }}
                              variant="p"
                            >
                              29 Jul 2021
                            </Typography>
                            <Typography
                              sx={{
                                margin: "4px 0px 0px",
                                lineHeight: 1.57143,
                                fontSize: "0.875rem",
                                fontFamily: "Public Sans, sans-serif",
                                fontWeight: 200,
                                color: "rgb(99, 115, 129)",
                              }}
                              variant="p"
                            >
                              3:59 PM
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          $811.45
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <Typography
                            sx={{
                              height: "22px",
                              minWidth: "22px",
                              lineHeight: 0,
                              borderRadius: "6px",
                              cursor: "default",
                              alignItems: "center",
                              whiteSpace: "nowrap",
                              display: "inline-flex",
                              justifyContent: "center",
                              padding: "0px 8px",
                              color: "rgb(183, 129, 3)",
                              fontSize: "0.75rem",
                              fontFamily: "Public Sans, sans-serif",
                              backgroundColor: "rgba(255, 193, 7, 0.16)",
                              fontWeight: 700,
                            }}
                            variant="p"
                          >
                            In progress
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <IconButton aria-label="delete" size="medium">
                            <BsThreeDotsVertical />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          component="th"
                          scope="row"
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Box sx={{ position: "relative" }}>
                              <Avatar
                                sx={{ width: "50px", height: "50px" }}
                                src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_10.jpg"
                              />
                              <Box
                                sx={{
                                  position: "absolute",
                                  height: "20px",
                                  width: "20px",
                                  borderRadius: "50%",
                                  bottom: "0",
                                  right: "-5px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "white",
                                  backgroundColor: "red",
                                }}
                              >
                                <BsArrowUpRight
                                  sx={{ height: "100%", width: "100%" }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "start",
                                flexDirection: "column",
                                gap: 1,
                              }}
                            >
                              <Typography
                                sx={{
                                  margin: "4px 0px 0px",
                                  lineHeight: 1.57143,
                                  fontSize: "0.875rem",
                                  fontFamily: "Public Sans, sans-serif",
                                  fontWeight: 200,
                                  color: "rgb(99, 115, 129)",
                                }}
                                variant="p"
                              >
                                Payment for
                              </Typography>
                              <Typography
                                sx={{
                                  margin: "0px",
                                  fontWeight: 700,
                                  lineHeight: 1,
                                  fontSize: "1.0625rem",
                                  fontFamily: "Public Sans, sans-serif",
                                }}
                                variant="p"
                              >
                                Courtney Henry
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              flexDirection: "column",
                              gap: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                margin: "0px",
                                fontWeight: 700,
                                lineHeight: 1,
                                fontSize: "1.0625rem",
                                fontFamily: "Public Sans, sans-serif",
                              }}
                              variant="p"
                            >
                              29 Jul 2021
                            </Typography>
                            <Typography
                              sx={{
                                margin: "4px 0px 0px",
                                lineHeight: 1.57143,
                                fontSize: "0.875rem",
                                fontFamily: "Public Sans, sans-serif",
                                fontWeight: 200,
                                color: "rgb(99, 115, 129)",
                              }}
                              variant="p"
                            >
                              3:59 PM
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          $436.03
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <Typography
                            sx={{
                              height: "22px",
                              minWidth: "22px",
                              lineHeight: 0,
                              borderRadius: "6px",
                              cursor: "default",
                              alignItems: "center",
                              whiteSpace: "nowrap",
                              display: "inline-flex",
                              justifyContent: "center",
                              padding: "0px 8px",
                              color: "#279D1B",
                              fontSize: "0.75rem",
                              fontFamily: "Public Sans, sans-serif",
                              backgroundColor: "#E4F8DD",
                              fontWeight: 700,
                            }}
                            variant="p"
                          >
                            Completed
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <IconButton aria-label="delete" size="medium">
                            <BsThreeDotsVertical />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          component="th"
                          scope="row"
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Box sx={{ position: "relative" }}>
                              <Avatar
                                sx={{ width: "50px", height: "50px" }}
                                src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_13.jpg"
                              />
                              <Box
                                sx={{
                                  position: "absolute",
                                  height: "20px",
                                  width: "20px",
                                  borderRadius: "50%",
                                  bottom: "0",
                                  right: "-5px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "white",
                                  backgroundColor: "red",
                                }}
                              >
                                <BsArrowUpRight
                                  sx={{ height: "100%", width: "100%" }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "start",
                                flexDirection: "column",
                                gap: 1,
                              }}
                            >
                              <Typography
                                sx={{
                                  margin: "4px 0px 0px",
                                  lineHeight: 1.57143,
                                  fontSize: "0.875rem",
                                  fontFamily: "Public Sans, sans-serif",
                                  fontWeight: 200,
                                  color: "rgb(99, 115, 129)",
                                }}
                                variant="p"
                              >
                                Receive money from
                              </Typography>
                              <Typography
                                sx={{
                                  margin: "0px",
                                  fontWeight: 700,
                                  lineHeight: 1,
                                  fontSize: "1.0625rem",
                                  fontFamily: "Public Sans, sans-serif",
                                }}
                                variant="p"
                              >
                                Annette Black
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              flexDirection: "column",
                              gap: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                margin: "0px",
                                fontWeight: 700,
                                lineHeight: 1,
                                fontSize: "1.0625rem",
                                fontFamily: "Public Sans, sans-serif",
                              }}
                              variant="p"
                            >
                              29 Jul 2021
                            </Typography>
                            <Typography
                              sx={{
                                margin: "4px 0px 0px",
                                lineHeight: 1.57143,
                                fontSize: "0.875rem",
                                fontFamily: "Public Sans, sans-serif",
                                fontWeight: 200,
                                color: "rgb(99, 115, 129)",
                              }}
                              variant="p"
                            >
                              3:59 PM
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          $811.45
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <Typography
                            sx={{
                              height: "22px",
                              minWidth: "22px",
                              lineHeight: 0,
                              borderRadius: "6px",
                              cursor: "default",
                              alignItems: "center",
                              whiteSpace: "nowrap",
                              display: "inline-flex",
                              justifyContent: "center",
                              padding: "0px 8px",
                              color: "#B72136",
                              fontSize: "0.75rem",
                              fontFamily: "Public Sans, sans-serif",
                              backgroundColor: "#FFE2E1",
                              fontWeight: 700,
                            }}
                            variant="p"
                          >
                            Failed
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <IconButton aria-label="delete" size="medium">
                            <BsThreeDotsVertical />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          component="th"
                          scope="row"
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Box sx={{ position: "relative" }}>
                              <Avatar
                                sx={{ width: "50px", height: "50px" }}
                                src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg"
                              />
                              <Box
                                sx={{
                                  position: "absolute",
                                  height: "20px",
                                  width: "20px",
                                  borderRadius: "50%",
                                  bottom: "0",
                                  right: "-5px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "white",
                                  backgroundColor: "green",
                                }}
                              >
                                <BsArrowDownLeft
                                  sx={{ height: "100%", width: "100%" }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "start",
                                flexDirection: "column",
                                gap: 1,
                              }}
                            >
                              <Typography
                                sx={{
                                  margin: "4px 0px 0px",
                                  lineHeight: 1.57143,
                                  fontSize: "0.875rem",
                                  fontFamily: "Public Sans, sans-serif",
                                  fontWeight: 200,
                                  color: "rgb(99, 115, 129)",
                                }}
                                variant="p"
                              >
                                Receive money from
                              </Typography>
                              <Typography
                                sx={{
                                  margin: "0px",
                                  fontWeight: 700,
                                  lineHeight: 1,
                                  fontSize: "1.0625rem",
                                  fontFamily: "Public Sans, sans-serif",
                                }}
                                variant="p"
                              >
                                Annette Black
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              flexDirection: "column",
                              gap: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                margin: "0px",
                                fontWeight: 700,
                                lineHeight: 1,
                                fontSize: "1.0625rem",
                                fontFamily: "Public Sans, sans-serif",
                              }}
                              variant="p"
                            >
                              29 Jul 2021
                            </Typography>
                            <Typography
                              sx={{
                                margin: "4px 0px 0px",
                                lineHeight: 1.57143,
                                fontSize: "0.875rem",
                                fontFamily: "Public Sans, sans-serif",
                                fontWeight: 200,
                                color: "rgb(99, 115, 129)",
                              }}
                              variant="p"
                            >
                              3:59 PM
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          $811.45
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <Typography
                            sx={{
                              height: "22px",
                              minWidth: "22px",
                              lineHeight: 0,
                              borderRadius: "6px",
                              cursor: "default",
                              alignItems: "center",
                              whiteSpace: "nowrap",
                              display: "inline-flex",
                              justifyContent: "center",
                              padding: "0px 8px",
                              color: "rgb(183, 129, 3)",
                              fontSize: "0.75rem",
                              fontFamily: "Public Sans, sans-serif",
                              backgroundColor: "rgba(255, 193, 7, 0.16)",
                              fontWeight: 700,
                            }}
                            variant="p"
                          >
                            In progress
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <IconButton aria-label="delete" size="medium">
                            <BsThreeDotsVertical />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          component="th"
                          scope="row"
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Box sx={{ position: "relative" }}>
                              <Avatar
                                sx={{ width: "50px", height: "50px" }}
                                src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg"
                              />
                              <Box
                                sx={{
                                  position: "absolute",
                                  height: "20px",
                                  width: "20px",
                                  borderRadius: "50%",
                                  bottom: "0",
                                  right: "-5px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "white",
                                  backgroundColor: "green",
                                }}
                              >
                                <BsArrowDownLeft
                                  sx={{ height: "100%", width: "100%" }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "start",
                                flexDirection: "column",
                                gap: 1,
                              }}
                            >
                              <Typography
                                sx={{
                                  margin: "4px 0px 0px",
                                  lineHeight: 1.57143,
                                  fontSize: "0.875rem",
                                  fontFamily: "Public Sans, sans-serif",
                                  fontWeight: 200,
                                  color: "rgb(99, 115, 129)",
                                }}
                                variant="p"
                              >
                                Receive money from
                              </Typography>
                              <Typography
                                sx={{
                                  margin: "0px",
                                  fontWeight: 700,
                                  lineHeight: 1,
                                  fontSize: "1.0625rem",
                                  fontFamily: "Public Sans, sans-serif",
                                }}
                                variant="p"
                              >
                                Annette Black
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              flexDirection: "column",
                              gap: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                margin: "0px",
                                fontWeight: 700,
                                lineHeight: 1,
                                fontSize: "1.0625rem",
                                fontFamily: "Public Sans, sans-serif",
                              }}
                              variant="p"
                            >
                              29 Jul 2021
                            </Typography>
                            <Typography
                              sx={{
                                margin: "4px 0px 0px",
                                lineHeight: 1.57143,
                                fontSize: "0.875rem",
                                fontFamily: "Public Sans, sans-serif",
                                fontWeight: 200,
                                color: "rgb(99, 115, 129)",
                              }}
                              variant="p"
                            >
                              3:59 PM
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          $811.45
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <Typography
                            sx={{
                              height: "22px",
                              minWidth: "22px",
                              lineHeight: 0,
                              borderRadius: "6px",
                              cursor: "default",
                              alignItems: "center",
                              whiteSpace: "nowrap",
                              display: "inline-flex",
                              justifyContent: "center",
                              padding: "0px 8px",
                              color: "rgb(183, 129, 3)",
                              fontSize: "0.75rem",
                              fontFamily: "Public Sans, sans-serif",
                              backgroundColor: "rgba(255, 193, 7, 0.16)",
                              fontWeight: 700,
                            }}
                            variant="p"
                          >
                            In progress
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          align="right"
                        >
                          <IconButton aria-label="delete" size="medium">
                            <BsThreeDotsVertical />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </TabContext>
        </Box>
      </Box>
    </Grid>
  );
}

export default List;
