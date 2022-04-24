import React, { Components } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import List from "../../src/components/Invoice/List/List";

function Invoice(props) {
  return (
    <Box
      sx={{
        marginX: 3,
        marginY: 2,
      }}
    >
      <Grid container spacing={3}>
        <List />
      </Grid>
    </Box>
  );
}
export default Invoice;
