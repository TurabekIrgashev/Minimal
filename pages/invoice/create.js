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
import Create from "../../src/components/Invoice/Create/Create";

function InvoiceDetails(props) {
  return (
    <Box
      sx={{
        marginX: 3,
        padding: 3,
        marginY: 2,
      }}
    >
      <Grid container spacing={3}>
        <Create />
      </Grid>
    </Box>
  );
}
export default InvoiceDetails;
