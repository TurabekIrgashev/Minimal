import { Box, Typography } from "@mui/material";
import React from "react";
import { AiFillApple, AiFillStar, AiFillWindows } from "react-icons/ai";
const numeral = require("numeral");

export default function TopRelated() {
  const data = [
    {
      img: "https://minimal-assets-api.vercel.app/assets/icons/ic_chrome.svg",
      title: "Chrome",
      type: "mac",
      price: "free",
      view: "73456",
      stars: 3,
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/icons/ic_drive.svg",
      title: "Drive",
      type: "mac",
      price: "$35.71",
      view: "99456",
      stars: 2,
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/icons/ic_dropbox.svg",
      title: "Dropbox",
      type: "Windows",
      price: "free",
      view: "109233",
      stars: 5,
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/icons/ic_dropbox.svg",
      title: "Evernote",
      type: "mac",
      price: "$93.10",
      view: "97233",
      stars: 5,
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/icons/ic_github.svg",
      title: "Github",
      type: "windows",
      price: "$93.10",
      view: "63233",
      stars: 3,
    },
  ];
  return (
    <Box
      sx={{
        boxShadow:
          " rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        p: 1,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h6"
        mb={2}
        sx={{
          fontWeight: "bold",
        }}
      >
        Top related Applications
      </Typography>

      {data.map((d) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(145, 158, 171, 0.12)",
                borderRadius: 2,
              }}
            >
              <img src={d.img} />
            </Box>
            <Box ml={2}>
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
              >
                {d.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box>
                  {d.type === "mac" ? (
                    <AiFillApple color="#888" />
                  ) : (
                    <AiFillWindows color="#888" />
                  )}
                </Box>
                <Typography
                  sx={{
                    fontSize: 13,
                  }}
                >
                  {d.type === "mac" ? "Mac" : "Windows"}
                </Typography>
                <Box>
                  {d.price ? (
                    <Box
                      sx={{
                        display: "inline",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontWeight: "bold",
                        backgroundColor:
                          d.price === "free"
                            ? "rgba(84, 214, 44, 0.16)"
                            : "rgba(255, 72, 66, 0.16)",
                        color:
                          d.price === "free"
                            ? "rgb(34, 154, 22);"
                            : "rgb(183, 33, 54)",
                        fontSize: 13,
                      }}
                    >
                      {d.price === "free" ? "Free" : d.price}
                    </Box>
                  ) : (
                    <Box></Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <AiFillStar color={d.stars > 0 ? "orange" : "#999"} />
            <AiFillStar color={d.stars > 1 ? "orange" : "#999"} />
            <AiFillStar color={d.stars > 2 ? "orange" : "#999"} />
            <AiFillStar color={d.stars > 3 ? "orange" : "#999"} />
            <AiFillStar color={d.stars > 4 ? "orange" : "#999"} />
            <Typography
              sx={{
                fontSize: 14,
                color: "#888",
              }}
            >
              {numeral(d.view).format("0.0a")}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
