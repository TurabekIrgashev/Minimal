import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Grid, Typography, Button } from "@mui/material";
function Carouselitem() {
    return (
        <Carousel
              autoPlay
              showThumbs={true}
              showStatus={false}
              infiniteLoop={true}
              className="presentation-mode"
              sx={{ borderRadius: "16px"}}
              // width={"350px"}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url(https://minimal-assets-api.vercel.app/assets/images/products/product_1.jpg)",

                  height: 335,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: " rgba(22, 28, 36, 0.64)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "start",
                    p: 3,
                    overflow: "hidden",
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#777",
                      textTransform: "uppercase",
                    }}
                  >
                    New
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      lineHeight: 2,
                    }}
                  >
                    Nike Air Max 97
                  </Typography>
                  <Button variant="contained" color="success">
                    Buy Now
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundImage:
                    "url(	https://minimal-assets-api.vercel.app/assets/images/products/product_2.jpg)",

                  height: 335,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: " rgba(22, 28, 36, 0.64)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "start",
                    p: 3,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#777",
                      textTransform: "uppercase",
                    }}
                  >
                    New
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      lineHeight: 2,
                    }}
                  >
                    Nike Air Max 97
                  </Typography>
                  <Button variant="contained" color="success">
                    Buy Now
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundImage:
                    "url(https://minimal-assets-api.vercel.app/assets/images/products/product_3.jpg)",

                  height: 335,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: " rgba(22, 28, 36, 0.64)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "start",
                    p: 3,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#777",
                      textTransform: "uppercase",
                    }}
                  >
                    New
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      lineHeight: 2,
                    }}
                  >
                    Nike Air Max 97
                  </Typography>
                  <Button variant="contained" color="success">
                    Buy Now
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundImage:
                    "url(https://minimal-assets-api.vercel.app/assets/images/products/product_4.jpg)",

                  height: 335,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: " rgba(22, 28, 36, 0.64)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "start",
                    p: 3,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#777",
                      textTransform: "uppercase",
                    }}
                  >
                    New
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      lineHeight: 2,
                    }}
                  >
                    Nike Air Max 97
                  </Typography>
                  <Button variant="contained" color="success">
                    Buy Now
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundImage:
                    "url(https://minimal-assets-api.vercel.app/assets/images/products/product_5.jpg)",

                  height: 335,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: " rgba(22, 28, 36, 0.64)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "start",
                    p: 3,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#777",
                      textTransform: "uppercase",
                    }}
                  >
                    New
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      lineHeight: 2,
                    }}
                  >
                    Nike Air Max 97
                  </Typography>
                  <Button variant="contained" color="success">
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </Carousel>
    );
}

export default Carouselitem;