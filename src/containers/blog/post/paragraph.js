import { Typography } from "@mui/material";
import React from "react";

export default function Paragraph({ type }) {
  return (
    <Typography
      variant={type}
      sx={{
        textTransform: "capitalize",
        mt: 2,
      }}
    >
      Heading {type}
    </Typography>
  );
}
