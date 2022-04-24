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
import Details from "../../src/components/Invoice/Details/Deatails";

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
        <Details />
      </Grid>
    </Box>
  );
}
export default InvoiceDetails;
