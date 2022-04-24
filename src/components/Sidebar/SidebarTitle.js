import { Typography } from "@mui/material";
import React from "react";

export default function SidebarTitle({ text, open }) {
  return (
    <Typography
      sx={{
        px: 3,
        opacity: open ? 1 : 0,
        color: "rgb(33, 43, 54)",
        lineHeight: 1.5,
        mt: 2,
        fontWeight: "bold",
      }}
    >
      {text}
    </Typography>
  );
}
