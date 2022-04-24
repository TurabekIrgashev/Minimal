import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import {
  FacebookSharp,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete" color="primary">
        <FacebookSharp />
      </IconButton>
      <IconButton aria-label="delete" color="error">
        <Instagram />
      </IconButton>
      <IconButton color="primary" aria-label="add an alarm">
        <LinkedIn />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <Twitter />
      </IconButton>
    </Stack>
  );
}
