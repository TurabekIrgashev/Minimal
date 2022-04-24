import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { height } from "@mui/system";
import { Box, Typography } from "@mui/material";

function BankingCarousel(props) {
  return (
    <Carousel
      autoPlay
      showThumbs={true}
      showStatus={false}
      infiniteLoop={true}
      className="presentation-mode"
      sx={{
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundImage:
            "url(https://minimal-assets-api.vercel.app/assets/bg_card.png)",
          height: 340,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(22, 28, 36, 0.64)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "start",
            p: 3,
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              color: "#777",
              textTransform: "uppercase",
            }}
          >
            Featured App
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              lineHeight: 2,
            }}
          >
            Lightroom mobile-coloro
          </Typography>
          <Typography
            sx={{
              color: "#777",
            }}
          >
            Do not Waste Time! 7 Facts Until You Reach Your Event
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://minimal-assets-api.vercel.app/assets/bg_card.png)",

          height: 340,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: 5,
          overflow: "hidden",
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
          }}
        >
          <Typography
            sx={{
              color: "#777",
              textTransform: "uppercase",
            }}
          >
            Featured App
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              lineHeight: 2,
            }}
          >
            Lightroom mobile-coloro
          </Typography>
          <Typography
            sx={{
              color: "#777",
            }}
          >
            Do not Waste Time! 7 Facts Until You Reach Your Event
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://minimal-assets-api.vercel.app/assets/bg_card.png)",
          height: 340,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: 5,
          overflow: "hidden",
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
          }}
        >
          <Typography
            sx={{
              color: "#777",
              textTransform: "uppercase",
            }}
          >
            Featured App
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              lineHeight: 2,
            }}
          >
            Lightroom mobile-coloro
          </Typography>
          <Typography
            sx={{
              color: "#777",
            }}
          >
            Do not Waste Time! 7 Facts Until You Reach Your Event
          </Typography>
        </Box>
      </Box>
    </Carousel>
  );
}

export default BankingCarousel;
