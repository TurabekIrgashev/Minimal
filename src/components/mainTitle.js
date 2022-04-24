import { Typography } from "@mui/material";
import React from "react";

export default function MainTitle({ text, varinat = "h5" }) {
  return (
    <Typography
      variant={varinat}
      sx={{
        fontWeight: "bold",
        letterSpacing: 0.2,
      }}
    >
      {text}
    </Typography>
  );
}
