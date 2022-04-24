import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import * as React from "react";

import { FaEllipsisV } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
export default function CustomizedTables() {
  const data = [
    {
      id: "INV-1647154687494",
      category: "Windows",
      price: "$16.19",
      sell: "paid",
    },
    {
      id: "INV-1647154687494",
      category: "Mac",
      price: "$34.30",
      sell: "paid",
    },
    {
      id: "INV-1647154687494",
      category: "Android",
      price: "$16.19",
      sell: "paid",
    },
    {
      id: "INV-1647154687494",
      category: "Android",
      price: "$34.30",
      sell: "out",
    },
    {
      id: "INV-1647154687494",
      category: "Mac",
      price: "$16.19",
      sell: "progress",
    },
  ];
  return (
    <Box
      sx={{
        boxShadow:
          " rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        pb: 5,
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
        New Invoice
      </Typography>
      <Table
        sx={{
          overflowX: "auto",
        }}
      >
        <TableHead
          sx={{
            backgroundColor: "rgba(145, 158, 171, 0.12)",
            borderRadius: 20,
            overflow: "hidden",
            color: " rgb(99, 115, 129)",
            border: "none",
          }}
        >
          <TableRow
            sx={{
              fontSize: 0.5,
            }}
          >
            <TableCell
              sx={{
                fontSize: 14,
                border: "none",
              }}
            >
              Invoice id
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                fontSize: 14,
              }}
            >
              Category
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                fontSize: 14,
              }}
            >
              Price
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                fontSize: 14,
              }}
            >
              Status
            </TableCell>
            <TableCell
              sx={{
                border: "none",
              }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((t) => (
            <TableRow>
              <TableCell
                sx={{
                  fontSize: 14,
                  border: "none",
                }}
              >
                {t.id}
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                }}
              >
                {t.category}
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                }}
              >
                {t.price}
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                }}
              >
                <Box
                  sx={{
                    display: "inline",
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    backgroundColor:
                      t.sell === "paid"
                        ? "rgba(84, 214, 44, 0.16)"
                        : t.sell === "out"
                        ? "rgba(255, 72, 66, 0.16)"
                        : "rgba(255, 193, 7, 0.16)",
                    color:
                      t.sell === "paid"
                        ? "rgb(34, 154, 22);"
                        : t.sell === "out"
                        ? " rgb(183, 33, 54);"
                        : "rgb(183, 129, 3)",
                  }}
                >
                  {t.sell === "paid"
                    ? "paid"
                    : t.sell === "out"
                    ? "Out of date"
                    : "progress"}
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                }}
              >
                <IconButton size="small">
                  <FaEllipsisV color="#777" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <Button
        sx={{
          color: "black ",
          fontSize: 12,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: 1,
          float: "right",
          mr: 2,
          mt: 1,
        }}
      >
        View All <FiChevronRight size={16} />
      </Button>
    </Box>
  );
}
