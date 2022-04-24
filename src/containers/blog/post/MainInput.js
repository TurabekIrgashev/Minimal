import { TextField } from "@mui/material";
import React from "react";

export default function MainInput({ label }) {
  return (
    <TextField
      required
      label={label}
      sx={{
        width: "100%",
        mt: 3,
      }}
    />
  );
}
