import { Box } from "@mui/material";
import React from "react";

export default function SecondaryNavBtn({ title }) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(145, 158, 171, 0.16)",
        color: "rgb(33, 43, 54)",
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 1,
        py: 0.7,
      }}
    >
      {title}
    </Box>
  );
}
