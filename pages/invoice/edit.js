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
import Edit from "../../src/components/Invoice/Edit/edit";

function InvoiceEdit(props) {
  return (
    <Box
      sx={{
        marginX: 3,
        padding: 3,
        marginY: 2,
      }}
    >
      <Grid container spacing={3}>
        <Edit />
      </Grid>
    </Box>
  );
}
export default InvoiceEdit;
