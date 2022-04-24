import { Box, Button, Container, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import React from "react";
import BankingIncome from "../src/components/Banking/BankingIncome/BankingIncome";
import BankingExpenses from "../src/components/Banking/BankingExpenses/BankingExpenses";
import BankingCarousel from "../src/components/Banking/BankingCarousel/BankingCarousel";
import BalanceStatistics from "../src/components/Banking/BalanceStatistics/BalanceStatistics";
import QuickTransfer from "../src/components/Banking/QuickTransfer/QuickTransfer";
import ExpensesCategories from "../src/components/Banking/ExpensesCategories/ExpensesCategories";
import Contacts from "../src/components/Banking/Contacts/Contacts";
import RecentTransitions from "../src/components/Banking/RecentTransitions/RecentTransitions";
import Invitation from "../src/components/Banking/Invitation/Invitation";

function banking(props) {
  return (
    <Box
      sx={{
        marginTop: 4,
        marginX: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid container spacing={2} item xs={12} md={7}>
          <BankingIncome />
          <BankingExpenses />
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              // width: "300px",
              // padding: "10px",
              borderRadius: 4,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <BankingCarousel />
          </Box>
        </Grid>
        <BalanceStatistics />
        <QuickTransfer />
        <ExpensesCategories />
        <Contacts />
        <RecentTransitions />
        <Invitation />
      </Grid>
    </Box>
  );
}

export default banking;
