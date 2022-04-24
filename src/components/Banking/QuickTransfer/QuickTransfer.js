import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import Slider from "@mui/material/Slider";

import Logo from "../../../../public/favicon.png";

import Image from "next/image";

function QuickTransfer(props) {
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          color: "rgb(33, 43, 54)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          backgroundImage: "none",
          overflow: "hidden",
          position: "relative",
          borderRadius: "16px",
          zIndex: 0,
          boxShadow: "none",
          backgroundColor: "rgb(244, 246, 248)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            width: "100%",
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
            variant="p"
          >
            Quick Transfer
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            marginY: 3,
          }}
        >
          <Typography
            sx={{
              margin: "0px",
              fontWeight: 700,
              lineHeight: 1.5,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              fontFamily: "Public Sans, sans-serif",
              color: "rgb(99, 115, 129)",
            }}
            variant="p"
          >
            RECENT
          </Typography>
          <Typography
            sx={{
              margin: "0px",
              color: " rgb(0, 171, 85)",
              textDecoration: "none",
              fontWeight: 700,
              lineHeight: 1.71429,
              fontSize: "0.875rem",
              textTransform: "capitalize",
              fontFamily: "Public Sans, sans-serif",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            variant="a"
          >
            View All
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100% ",
          }}
        >
          <Slider
            aria-label="Temperature"
            defaultValue={50}
            valueLabelDisplay="auto"
            step={50}
            marks
            min={0}
            max={1000}
            sx={{
              width: "100%",
              color: "green",
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default QuickTransfer;
