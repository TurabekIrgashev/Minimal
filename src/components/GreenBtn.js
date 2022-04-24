import { Button } from "@mui/material";
import React from "react";

export default function GreenBtn({ title, icon, sx }) {
  return (
    <div>
      <Button
        variant="contained"
        color="success"
        sx={{
          backgroundColor: "rgb(0, 171, 8)",
          color: "#fff",
          boxShadow: "rgb(0 171 85 / 24%) 0px 8px 16px 0px",
          transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          mt: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
          ...sx,
        }}
      >
        {icon}
        {title}
      </Button>
    </div>
  );
}
