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
} from "@mui/material";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { IoSend } from "react-icons/io";
import {
  AiOutlineDownload,
  AiOutlineCheck,
  AiFillPrinter,
} from "react-icons/ai";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, desOne, qyu, price, number) {
  return { name, desOne, qyu, price, number };
}

const rows = [
  createData(
    "Apply These 7 Secret Techniques To Improve Event",
    "Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut.",
    5,
    "$16.19",
    1
  ),
  createData(
    "Believing These 7 Myths About Event Keeps You From Growing",
    "Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex sa",
    5,
    "$35.71	",
    2
  ),
  createData(
    "Don't Waste Time! 7 Facts Until You Reach Your Event",
    "Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum suscipit et ipsu",
    5,
    "$34.30	",
    3
  ),
];

function Details(props) {
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
            Invoice Details
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
              INV-17052
            </li>
          </ul>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton aria-label="delete" size="large">
            <MdModeEditOutline />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <AiFillEye />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <AiOutlineDownload />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <AiFillPrinter />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <BsShareFill />
          </IconButton>
        </Box>
        <Box>
          <Button
            sx={{
              color: "black",
              borderColor: "#637381",
              borderRadius: 3,
              fontWeight: 700,
              "&:hover": {
                color: "black",
                borderColor: "#637381",
              },
            }}
            variant="outlined"
          >
            <IconButton aria-label="delete" size="small">
              <AiOutlineCheck color="black" />
            </IconButton>
            Mark as Paid
          </Button>
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
          padding: 4,
          marginTop: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "150px",
              height: "150px",
              padding: 0,
              margin: 0,
            }}
            src="https://minimals.cc/logo/logo_full.svg"
            alt=""
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
            }}
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
                color: "rgb(183, 33, 54)",
                fontSize: "0.75rem",
                fontFamily: "Public Sans, sans-serif",
                backgroundColor: "rgba(255, 72, 66, 0.16)",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              overdue
            </Typography>
            <Typography
              sx={{
                margin: "0px",
                fontWeight: 700,
                lineHeight: 1.55556,
                fontSize: "1.0625rem",
                fontFamily: "Public Sans, sans-serif",
              }}
            >
              INV-17052
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  margin: "0px 0px 16px",
                  fontWeight: 700,
                  lineHeight: 1.5,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  fontFamily: "Public Sans, sans-serif",
                  color: "rgb(145, 158, 171)",
                }}
              >
                INVOICE FROM
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                }}
              >
                Reece Chung
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                }}
              >
                36901 Elmer Spurs Apt. 762 - Miramar, DE / 92836
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                }}
              >
                Phone: 990-588-5716
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  margin: "0px 0px 16px",
                  fontWeight: 700,
                  lineHeight: 1.5,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  fontFamily: "Public Sans, sans-serif",
                  color: "rgb(145, 158, 171)",
                }}
              >
                INVOICE to
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                }}
              >
                Reece Chung
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                }}
              >
                36901 Elmer Spurs Apt. 762 - Miramar, DE / 92836
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                }}
              >
                Phone: 990-588-5716
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  margin: "0px 0px 16px",
                  fontWeight: 700,
                  lineHeight: 1.5,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  fontFamily: "Public Sans, sans-serif",
                  color: "rgb(145, 158, 171)",
                }}
              >
                DATE CREATE
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                }}
              >
                21 March 2022
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  margin: "0px 0px 16px",
                  fontWeight: 700,
                  lineHeight: 1.5,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  fontFamily: "Public Sans, sans-serif",
                  color: "rgb(145, 158, 171)",
                }}
              >
                DUE DATE
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                }}
              >
                05 April 2022
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TableContainer
            sx={{
              boxShadow: "none",
              width: "100%",
              padding: "0",
              margin: "0",
            }}
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell align="right">Qty</TableCell>
                  <TableCell align="right">Unit price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.number}</TableCell>
                    <TableCell component="th" scope="row">
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "600",
                          }}
                        >
                          {row.name}
                        </Typography>
                        <Typography>{row.desOne}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">{row.qyu}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: 10,
            borderBottom: "1px solid #E5E8EB",
            padding: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              gap: 3,
              flexDirection: "column",
            }}
          >
            <Typography>Subtotal</Typography>
            <Typography>Discount</Typography>
            <Typography>Taxes</Typography>
            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              Total
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              gap: 3,
              flexDirection: "column",
            }}
          >
            <Typography>$89.09</Typography>
            <Typography
              sx={{
                color: "red",
              }}
            >
              -$10
            </Typography>
            <Typography>$5</Typography>
            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              $89.09
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Notes
            </Typography>
            <Typography>
              We appreciate your business. Should you need us to add VAT or
              extra notes let us know!
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              Have a Question?
            </Typography>
            <Typography>support@minimals.cc</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Details;
