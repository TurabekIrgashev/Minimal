import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { topUsers } from "../../data/home";
import { GiTrophyCup } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
const numeral = require("numeral");

export default function TopAuthors() {
  const data = topUsers;
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
        Top Authors
      </Typography>
      {data.map((d) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar src={d.img} />

            <Box ml={2}>
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
              >
                {d.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <AiFillHeart color="#777" />
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#666",
                  }}
                >
                  {numeral(d.like).format("0.0a")}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  d.deg === 1
                    ? "rgba(0, 171, 85, 0.08)"
                    : d.deg === 2
                    ? "rgba(24, 144, 255, 0.08)"
                    : "rgba(255, 72, 66, 0.08)",
              }}
            >
              <GiTrophyCup
                color={
                  d.deg === 1
                    ? "rgba(0, 171, 85)"
                    : d.deg === 2
                    ? "rgb(24, 144, 255)"
                    : "rgb(255, 72, 66)"
                }
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
