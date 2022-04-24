import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Typography, Button } from "@mui/material";
function Carouselitem1() {
  return (
    <Box sx={{ display: "block" }}>
      <Carousel
        autoPlay
        showThumbs={true}
        infiniteLoop={true}
        showStatus={true}
        dynamicHeight={false}
        // animationHandler="fade"
        thumbWidth={80}
      >
        <Box sx={{ borderRadius: "16px", width: "100%" }}>
          <img
            src="https://minimal-assets-api.vercel.app/assets/images/products/product_1.jpg"
            alt="image1"
            className="carouselImg"
          />
        </Box>
        <Box sx={{ borderRadius: "16px", width: "100%" }}>
          <img
            src="https://minimal-assets-api.vercel.app/assets/images/products/product_3.jpg"
            alt="image3"
            className="carouselImg"
          />
        </Box>
        <Box sx={{ borderRadius: "16px", width: "100%" }}>
          <img
            src="https://minimal-assets-api.vercel.app/assets/images/products/product_4.jpg"
            alt="image4"
            className="carouselImg"
          />
        </Box>
        <Box sx={{ borderRadius: "16px", width: "100%" }}>
          <img
            src="https://minimal-assets-api.vercel.app/assets/images/products/product_6.jpg"
            alt="image6"
            className="carouselImg"
          />
        </Box>
        <Box sx={{ borderRadius: "16px", width: "100%" }}>
          <img
            src="https://minimal-assets-api.vercel.app/assets/images/products/product_7.jpg"
            alt="image7"
            className="carouselImg"
          />
        </Box>
        <Box sx={{ borderRadius: "16px", width: "100%" }}>
          <img
            src="https://minimal-assets-api.vercel.app/assets/images/products/product_8.jpg"
            alt="image8"
            className="carouselImg"
          />
        </Box>
      </Carousel>
    </Box>
  );
}

export default Carouselitem1;
