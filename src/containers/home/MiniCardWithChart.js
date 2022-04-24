import { Box, CssBaseline, Typography } from "@mui/material";
import React from "react";
const numeral = require("numeral");
export default function MiniCardWithChart(props) {
  const data = props.data;
  return (
    <Box
      sx={{
        p: 3,
        boxShadow:
          "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        borderRadius: 2,
        backgroundColor: " rgb(255, 255, 255)",
        color: "rgb(33, 43, 54)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: "600",
          }}
        >
          {data.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: 1,
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor:
                data.renge > 0
                  ? "rgba(84, 214, 44, 0.16)"
                  : "rgba(255, 72, 66, 0.16)",
              color: data.renge > 0 ? "rgb(84, 214, 44)" : "rgb(255, 72, 66)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={data.renge > 0 ? "/plusRenge.svg" : "minusRenge.svg"} />
          </Box>
          <Typography>
            {data.renge > 0 ? "+" + data.renge + "%" : "-" + data.renge + "%"}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: 27,
            fontWeight: "bold",
            mt: 1,
          }}
        >
          {numeral(data.total).format(0, 0)}
        </Typography>
      </Box>
      <Box
        sx={{
          border: "1px solid #fff",
        }}
      >
        <img src={data.src} />
      </Box>
    </Box>
  );
}
