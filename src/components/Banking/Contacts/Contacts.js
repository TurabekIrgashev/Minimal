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
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function Contacts(props) {
  return (
    <Grid item xs={12} lg={4}>
      <Box
        sx={{
          color: "rgb(33, 43, 54)",
          lineHeight: 1.5,
          fontSize: "1rem",
          fontFamily: "Public Sans, sans-serif",
          fontWeight: 400,
          backgroundColor: "rgb(255, 255, 255)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          boxShadow:
            "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          padding: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginY: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                margin: "0px",
                fontWeight: 700,
                lineHeight: 1.55556,
                fontSize: "1.0625rem",
                fontFamily: "Public Sans, sans-serif",
              }}
              variant="p"
            >
              Contacts
            </Typography>
            <Typography
              sx={{
                margin: "4px 0px 0px",
                lineHeight: 1.57143,
                fontSize: "0.875rem",
                fontFamily: "Public Sans, sans-serif",
                fontWeight: 400,
                color: "rgb(99, 115, 129)",
              }}
              variant="p"
            >
              You have 122 contacts
            </Typography>
          </Box>
          <Box>
            <IconButton color="success">
              <AiOutlinePlus />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginY: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Typography
                sx={{
                  margin: "0px 0px 4px",
                  fontWeight: 600,
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Jayvion Simon
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: "rgb(99, 115, 129)",
                }}
              >
                nannie_abernathy70@yahoo.com
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton aria-label="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-1ktnz7v iconify iconify--eva"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.11 23a1 1 0 0 1-.34-.06a1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38a1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44Z"
                ></path>
              </svg>
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginY: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_6.jpg"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Typography
                sx={{
                  margin: "0px 0px 4px",
                  fontWeight: 600,
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Lucian Obrien
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: "rgb(99, 115, 129)",
                }}
              >
                ashlynn_ohara62@gmail.com
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton aria-label="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-1ktnz7v iconify iconify--eva"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.11 23a1 1 0 0 1-.34-.06a1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38a1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44Z"
                ></path>
              </svg>
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginY: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_7.jpg"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Typography
                sx={{
                  margin: "0px 0px 4px",
                  fontWeight: 600,
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Deja Brady
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: "rgb(99, 115, 129)",
                }}
              >
                milo.farrell@hotmail.com
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton aria-label="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-1ktnz7v iconify iconify--eva"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.11 23a1 1 0 0 1-.34-.06a1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38a1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44Z"
                ></path>
              </svg>
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginY: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Typography
                sx={{
                  margin: "0px 0px 4px",
                  fontWeight: 600,
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Harrison Stein
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: "rgb(99, 115, 129)",
                }}
              >
                violet.ratke86@yahoo.com
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton aria-label="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-1ktnz7v iconify iconify--eva"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.11 23a1 1 0 0 1-.34-.06a1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38a1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44Z"
                ></path>
              </svg>
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginY: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Typography
                sx={{
                  margin: "0px 0px 4px",
                  fontWeight: 600,
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Reece Chung
              </Typography>
              <Typography
                sx={{
                  margin: "0px",
                  lineHeight: 1.57143,
                  fontSize: "0.875rem",
                  fontFamily: "Public Sans, sans-serif",
                  fontWeight: 400,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: "rgb(99, 115, 129)",
                }}
              >
                letha_lubowitz24@yahoo.com
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton aria-label="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-1ktnz7v iconify iconify--eva"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.11 23a1 1 0 0 1-.34-.06a1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38a1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44Z"
                ></path>
              </svg>
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Button
            sx={{
              width: "100%",
              color: "inherit",
              paddingY: 1,
              fontWeight: "bold",
              paddingX: 3,
              borderRadius: 2,
              borderColor: "gray",
              "&:hover": {
                borderColor: "gray",
              },
            }}
            variant={"outlined"}
          >
            View All
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
export default Contacts;
