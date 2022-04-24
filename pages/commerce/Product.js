import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import Carouselitem1 from "../../src/containers/eCommerce/Product/Carousel1";
import HoverRating from "../../src/containers/eCommerce/Product/Rating";
import RadioButtons from "../../src/containers/eCommerce/Product/RadioButton";
import BasicSelect from "../../src/containers/eCommerce/Product/SelectSize";
import Counter from "../../src/containers/eCommerce/Product/Counter";
import IconButtons from "../../src/containers/eCommerce/Product/IconButton";
import { AddShoppingCart } from "@mui/icons-material";
import {
  BsFillPatchCheckFill,
  BsFillClockFill,
  BsShieldFillCheck,
} from "react-icons/bs";

function Product() {
  return (
    <>
      <Box>
        <Typography
          gutterBottom
          variant="h5"
          fontWeight="600"
          sx={{ color: "#212b36", mb: 2 }}
        >
          Product Details
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
              <a>Shop</a>
            </Link>
          </Typography>
          <BsDot fontSize={22} color="#919eab" />
          <Typography sx={{ fontSize: 14 }} component="a" color="#919eab">
            Nike air force 1 ndestrukt
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          p: 3,
          boxShadow:
            "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
          borderRadius: 2,
          backgroundColor: " rgb(255, 255, 255)",
          color: "rgb(33, 43, 54)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Carouselitem1 />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Button
                variant="disabled"
                sx={{ background: "pink", p: "4px", borderRadius: "8px" }}
              >
                <Typography
                  sx={{ color: "red", fontWeight: "bold" }}
                  variant="body2"
                >
                  LOW STOCK
                </Typography>
              </Button>
              <Typography
                sx={{ color: "red", fontWeight: "bold", mt: 2 }}
                variant="body2"
              >
                SALE
              </Typography>
              <Typography sx={{ fontWeight: "bold", mt: 2 }} variant="h6">
                Nike Air Force 1 NDESTRUKT
              </Typography>
              <HoverRating />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mt: 2,
                }}
              >
                <Typography
                  sx={{ color: "gray", fontWeight: "bold" }}
                  variant="h4"
                >
                  <del>$16.19</del>
                </Typography>
                <Typography sx={{ fontWeight: "bold" }} variant="h4">
                  $16.19
                </Typography>
              </Box>
              <Divider
                sx={{
                  flexShrink: 0,
                  borderWidth: "0px 0px thin",
                  borderColor: "rgba(145, 158, 171, 0.24)",
                  borderStyle: "dashed",
                  mt: 5,
                }}
              />
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Color</Typography>
                <RadioButtons />
              </Box>
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Size</Typography>
                <BasicSelect />
              </Box>
              <Box
                sx={{
                  color: "gray",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  mt: 1,
                }}
              >
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
                  Size Chart
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Quantity</Typography>
                <Counter />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: 14,
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  component="a"
                >
                  Available: 60
                </Typography>
              </Box>
              <Divider
                sx={{
                  flexShrink: 0,
                  borderWidth: "0px 0px thin",
                  borderColor: "rgba(145, 158, 171, 0.24)",
                  borderStyle: "dashed",
                  mt: 5,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  mt: 4,
                }}
              >
                <Button
                  variant="contained"
                  color="warning"
                  startIcon={<AddShoppingCart />}
                  sx={{
                    width: { md: "200px", xs: "100%" },
                    fontSize: "14px",
                    color: "black",
                    py: 1,
                    fontWeight: "bold",
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    width: { md: "200px", xs: "100%" },
                    fontSize: "14px",
                    py: 1,
                    fontWeight: "bold",
                  }}
                >
                  Buy Now
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 4,
                }}
              >
                <IconButtons />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6} xl={4} sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                background: "#EBF8F2",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsFillPatchCheckFill
                style={{ fontSize: "40px", color: "green" }}
              />
            </Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", mt: 2 }}>
              100% Original
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "gray",
                maxWidth: "300px",
                textAlign: "center",
              }}
            >
              Chocolate bar candy canes ice cream toffee cookie halvah.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4} sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                background: "#EBF8F2",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsFillClockFill style={{ fontSize: "40px", color: "green" }} />
            </Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", mt: 2 }}>
              10 Day Replacement
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "gray",
                maxWidth: "300px",
                textAlign: "center",
              }}
            >
              Marshmallow biscuit donut dragée fruitcake wafer.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4} sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                background: "#EBF8F2",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsShieldFillCheck style={{ fontSize: "40px", color: "green" }} />
            </Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", mt: 2 }}>
              Year Warranty
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "gray",
                maxWidth: "300px",
                textAlign: "center",
              }}
            >
              Cotton candy gingerbread cake I love sugar sweet.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Product;
