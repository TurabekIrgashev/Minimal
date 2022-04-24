import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { installCountries } from "../../data/home";
import { AiFillAndroid, AiFillApple, AiFillWindows } from "react-icons/ai";
const numeral = require("numeral");

export default function MostInstalled() {
  const data = installCountries;
  return (
    <Box
      sx={{
        boxShadow:
          " rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        p: 1,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h6"
        mb={2}
        sx={{
          fontWeight: "bold",
        }}
      >
        Top Installed Countries
      </Typography>
      <Table
        sx={{
          overflowX: "auto",
        }}
      >
        <TableBody>
          {data.map((d) => (
            <TableRow>
              <TableCell
                sx={{
                  border: "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <img src={d.img} />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {d.country}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <AiFillAndroid color="#666" />
                  <Typography sx={{ color: "#666" }}>
                    {numeral(d.android).format("0.0a")}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <AiFillWindows color="#666" />
                  <Typography sx={{ color: "#666" }}>
                    {numeral(d.windows).format("0.0a")}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <AiFillApple color="#666" />
                  <Typography sx={{ color: "#666" }}>
                    {numeral(d.mac).format("0.0a")}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
