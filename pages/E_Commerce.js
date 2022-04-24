import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { Container } from "@mui/material";
import Image from "next/image";
import CardWithChart from "../src/containers/commerce/CardWithChart";
import { total } from "../src/data/commerce";
import RadialBars from "./../src/containers/commerce/RadialBars";
import YearlySales from "../src/containers/commerce/YearlySales";
import SalesOverviwe from "../src/containers/commerce/SalesOverviwe";
import CurrentBalance from "../src/containers/commerce/CurrentBalance";
import DataTable from "../src/containers/commerce/DataTable";
import LatestProducts from "../src/containers/commerce/LatestProducts";
import Carouselitem from "../src/containers/commerce/Carousel";
function E_commerce() {
  const totalData = total;
  return (
    <>
      <Box>
        <Grid container spacing={3} mt={2}>
         <Grid item xs={12} md={6} lg={8}>
          <Box
            sx={{
              backgroundColor: "rgb(200, 250, 205)",
              borderRadius: 5,
              minHeight: 280,
              p: 5,
              display: "flex",
              transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              alignItems: "center",
            }}
          >
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                md={6}
                lg={8}
                className="items-center sm:items-start"
                sx={{py: 7}}
              >
                <Box sx={{textAlign: {md: "left", xs: "center"}, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: {md:"flex-start", xs:"center"}}}>
                  <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  Congratulations,
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    mb: 1,
                  }}
                >
                  Fabiana Capmany!
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "1rem",
                  }}
                >
                  Best seller of the month You have done 57.6% more sales today.
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    backgroundColor: "rgb(0, 171, 8)",
                    color: "#fff",
                    boxShadow: "rgb(0 171 85 / 24%) 0px 8px 16px 0px",
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    mt: 7,
                    display: "block",
                  }}
                >
                  Go now
                </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/2.svg"
                    alt="book"
                    className="w-6/12 mx-auto sm:w-full my-auto"
                  ></img>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ borderRadius: "16px",}}>
            <Carouselitem/>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={2}>
          {totalData.map((t) => (
            <Grid key={t.title} item xs={12} md={6} lg={4}>
              <CardWithChart data={t} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={6} lg={4}>
            <RadialBars />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <YearlySales />
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={6} lg={8}>
            <SalesOverviwe />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CurrentBalance />
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={6} lg={8}>
            <DataTable />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <LatestProducts />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default E_commerce;
