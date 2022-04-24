import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function Invitation(props) {
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          backgroundColor: "rgb(255, 255, 255)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          marginTop: 10,
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "none",
          padding: "128px 40px 40px",
          color: "rgb(255, 255, 255)",
          position: "relative",
          backgroundImage:
            "linear-gradient(135deg, rgb(0, 171, 85) 0%, rgb(0, 123, 85) 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            width: "100%",
            position: "absolute",
            top: "-100px",
            left: "40px",
            alignItems: "center",
            marginTop: 3,
          }}
        >
          <img
            draggable={false}
            src={
              "https://minimal-assets-api.vercel.app/assets/illustrations/illustration_invite.png"
            }
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                margin: "0px",
                fontWeight: 700,
                lineHeight: 1.33,
                width: "40%",
                fontSize: " 1.2rem",
                fontFamily: "Public Sans, sans-serif",
              }}
            >
              Invite friends and earn
            </Typography>

            <Typography
              sx={{
                margin: "0px",
                fontWeight: 700,
                lineHeight: 1.33,
                fontSize: " 2.5rem",
                fontFamily: "Public Sans, sans-serif",
              }}
            >
              $50
            </Typography>
          </Box>
          <Box sx={{ width: "100%", marginTop: 4 }}>
            <Typography
              sx={{
                margin: "0px",
                width: "100%",
                fontWeight: 700,
                lineHeight: 1.33,
                fontSize: " 0.8rem",
                fontFamily: "Public Sans, sans-serif",
              }}
            >
              Praesent egestas tristique nibh. Duis lobortis massa imperdiet
              quam.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              marginTop: 4,
              display: "flex",
              gap: 2,
            }}
          >
            <input
              placeholder="Email"
              type="text"
              style={{
                display: "flex",
                width: "80%",
                padding: "16px 20px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#007247",
                color: "#6DB496",
                "&:placeholder": {
                  color: "#6DB496",
                },
              }}
              className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall css-muvvuh"
              value=""
            />
            <Button
              sx={{
                color: "black",
                backgroundColor: "#E1CA2C",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#E1CA2C",
                },
              }}
              variant="contained"
            >
              <Typography>Invite</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Invitation;
