import React from "react";
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
  InputLabel,
  TextField,
} from "@mui/material";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

function Create(props) {
  const [age, setAge] = React.useState("");

  const [value, setValue] = React.useState(null);
  const [valueOne, setValueOne] = React.useState(null);
  const [valueTwo, setValueTwo] = React.useState(null);
  const [valueThree, setValueThree] = React.useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeOne = (event) => {
    setValueOne(event.target.value);
  };
  const handleChangeTwo = (event) => {
    setValueTwo(event.target.value);
  };
  const handleChangeThree = (event) => {
    setValueThree(event.target.value);
  };

  return (
    <>
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
            Create a new invoice
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
              New invoice
            </li>
          </ul>
        </Box>
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
          overflow: "hidden",
          marginTop: 4,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                borderRight: "1px dashed #E5E8EB",
                marginLeft: 4,
                marginTop: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography
                  sx={{
                    margin: "0px",
                    fontWeight: 700,
                    lineHeight: 1.55556,
                    fontSize: "1.0625rem",
                    fontFamily: "Public Sans, sans-serif",
                    color: "rgb(145, 158, 171)",
                  }}
                >
                  From:
                </Typography>
                <Typography
                  sx={{
                    margin: "0px",
                    fontWeight: 600,
                    lineHeight: 1.57143,
                    fontSize: "0.875rem",
                    fontFamily: "Public Sans, sans-serif",
                  }}
                >
                  Jayvion Simon
                </Typography>
                <Typography
                  sx={{
                    margin: "8px 0px 4px",
                    lineHeight: 1.57143,
                    fontSize: "0.875rem",
                    fontFamily: "Public Sans, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  19034 Verna Unions Apt. 164 - Honolulu, RI / 87535
                </Typography>
                <Typography
                  sx={{
                    margin: "8px 0px 4px",
                    lineHeight: 1.57143,
                    fontSize: "0.875rem",
                    fontFamily: "Public Sans, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Phone: 365-374-4961
                </Typography>
              </Box>
              <Box>
                <Button color="success" variant="text">
                  <MdModeEditOutline />
                  <Typography
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      boxSizing: "border-box",
                      webkitTapHighLightColor: "transparent",
                      backgroundColor: "transparent",
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
                      fontSize: "0.8125rem",
                      textTransform: "capitalize",
                      fontFamily: "Public Sans, sans-serif",
                      minWidth: "64px",
                      padding: "2px 3px",
                      borderRadius: "8px",
                      transition:
                        "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                      color: "rgb(0, 171, 85)",
                    }}
                  >
                    Change
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginRight: 4,
                marginTop: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography
                  sx={{
                    margin: "0px",
                    fontWeight: 700,
                    lineHeight: 1.55556,
                    fontSize: "1.0625rem",
                    fontFamily: "Public Sans, sans-serif",
                    color: "rgb(145, 158, 171)",
                  }}
                >
                  To:
                </Typography>
              </Box>
              <Box>
                <Button color="success" variant="text">
                  <AiOutlinePlus />
                  <Typography
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      boxSizing: "border-box",
                      webkitTapHighLightColor: "transparent",
                      backgroundColor: "transparent",
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
                      fontSize: "0.8125rem",
                      textTransform: "capitalize",
                      fontFamily: "Public Sans, sans-serif",
                      minWidth: "64px",
                      padding: "2px 3px",
                      borderRadius: "8px",
                      transition:
                        "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                      color: "rgb(0, 171, 85)",
                    }}
                  >
                    Add
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                padding: "24px",
                backgroundColor: "rgb(244, 246, 248)",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={valueOne}
                      label="Status"
                      onChange={handleChangeOne}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <LocalizationProvider
                    style={{ width: "100%", borderRadius: 3 }}
                    dateAdapter={AdapterDateFns}
                    fullWidth
                  >
                    <DatePicker
                      sx={{ width: "100%" }}
                      label="Date create"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          sx={{ width: "100%", borderRadius: 3 }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Due date"
                      sx={{ width: "100%" }}
                      width={"100%"}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField sx={{ width: "100%" }} {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "100%",
                padding: 4,
                borderBottom: "1px dashed #E5E8EB",
                marginY: 2,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    margin: "0px 0px 24px",
                    fontWeight: 700,
                    lineHeight: 1.55556,
                    fontSize: "1.0625rem",
                    fontFamily: "Public Sans, sans-serif",
                    color: "rgb(145, 158, 171)",
                  }}
                >
                  Details:
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item container spacing={2} xs={12} md={8}>
                  <Grid item xs={12} md={4.5}>
                    <TextField
                      id="outlined-textarea"
                      label="Title"
                      placeholder="Placeholder"
                      multiline
                      sx={{
                        width: "100%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4.5}>
                    <TextField
                      id="outlined-textarea"
                      label="Description"
                      placeholder="Placeholder"
                      multiline
                      sx={{
                        width: "100%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Service type"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item container spacing={2} xs={12} md={4}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      id="outlined-textarea"
                      label="Quantity"
                      multiline
                      sx={{
                        width: "100%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      id="outlined-textarea"
                      label="Price"
                      multiline
                      sx={{
                        width: "100%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      id="outlined-textarea"
                      label="Total"
                      sx={{
                        width: "100%",
                        borderRadius: 3,
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        display: "inline-flex",
                        gap: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        boxSizing: "border-box",
                        webkitTapHighlightColor: "transparent",
                        backgroundColor: "transparent",
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
                        fontSize: "0.8125rem",
                        textTransform: "capitalize",
                        fontFamily: "Public Sans, sans-serif",
                        minWidth: "64px",
                        padding: "4px 5px",
                        borderRadius: "8px",
                        transition:
                          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        color: "rgb(255, 72, 66)",
                      }}
                      color="error"
                      variant="text"
                      size="small"
                    >
                      <RiDeleteBin6Line width="22px" />
                      Remove
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 4,
                paddingX: 4,
              }}
            >
              <Button
                sx={{
                  display: "inline-flex",
                  gap: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  boxSizing: "border-box",
                  webkitTapHighlightColor: "transparent",
                  backgroundColor: "transparent",
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
                  fontSize: "0.8125rem",
                  textTransform: "capitalize",
                  fontFamily: "Public Sans, sans-serif",
                  minWidth: "64px",
                  padding: "4px 5px",
                  borderRadius: "8px",
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  color: "rgb(0, 171, 85)",
                  flexShrink: 0,
                }}
              >
                <AiOutlinePlus />
                Add New Details
              </Button>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <TextField
                  id="outlined-textarea"
                  label="Discount"
                  multiline
                  sx={{
                    width: "100%",
                  }}
                />
                <TextField
                  id="outlined-textarea"
                  label="Taxes"
                  multiline
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              padding: 4,
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxSizing: "border-box",
                outline: "0px",
                border: "0px currentcolor",
                margin: "0px",
                cursor: "pointer",
                userSelect: "none",
                verticalAlign: "middle",
                appearance: "none",
                textDecoration: "none",
                fontWeight: 700,
                lineHeight: 1.71429,
                fontSize: "0.9375rem",
                textTransform: "capitalize",
                fontFamily: "Public Sans, sans-serif",
                minWidth: "64px",
                padding: "8px 22px",
                borderRadius: "8px",
                backgroundColor: " rgb(223, 227, 232)",
                color: "rgb(33, 43, 54)",
                boxShadow: "rgb(145 158 171 / 16%) 0px 8px 16px 0px",
                height: "48px",
                transition:
                  "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              }}
            >
              Save As Draft
            </Button>
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
                height: "48px",
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
              Create & Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default Create;
