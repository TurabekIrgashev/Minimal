import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";
import InputSearch from "../../src/containers/eCommerce/InputSearch";
import PrimaryCard from "../../src/containers/eCommerce/PrimaryCard";
import { ShopData } from "../../src/data/shop";

function Shop() {
  const primaryCard = ShopData;
  return (
    <>
      <Box>
        <Typography
          gutterBottom
          variant="h5"
          fontWeight="600"
          sx={{ color: "#212b36", mb: 2 }}
        >
          Shop
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 4 }}>
          <Typography
            sx={{
              fontSize: 14,
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            component="a"
          >
            <Link href="/home">
              <a>Dashboard</a>
            </Link>
          </Typography>
          <BsDot fontSize={22} color="#919eab" />
          <Typography
            sx={{
              fontSize: 14,
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            component="a"
          >
            <Link href="/commerce/shop">
              <a>E-Commerce</a>
            </Link>
          </Typography>
          <BsDot fontSize={22} color="#919eab" />
          <Typography sx={{ fontSize: 14 }} component="a" color="#919eab">
            Shop
          </Typography>
        </Box>
      </Box>
      <Box>
        <InputSearch
          sx={{
            my: 4,
          }}
        />
      </Box>
      <Box>
        <Grid container spacing={3} mt={5}>
          {primaryCard.map((d) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <PrimaryCard data={d} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Shop;
