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

function RecentTransitions(props) {
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
          width: "100%",
          padding: 4,
        }}
      >
        <Box sx={{ padding: 1, width: "100%" }}>
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
              Recent Transitions
            </Typography>
          </Box>
        </Box>
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
    </Grid>
  );
}

export default RecentTransitions;
