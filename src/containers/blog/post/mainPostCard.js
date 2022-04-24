import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
export default function MainPostCard({ data, sx = {} }) {
  console.log(data);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 360,
        borderRadius: 5,
        backgroundImage: `url(${data.bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
        ...sx,
      }}
    >
      {data.title && (
        <Box
          sx={{
            width: "100%",
            minHeight: 400,
            backgroundColor: "rgba(22, 28, 36, 0.8)",
            color: "#fff",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">{data.title}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Avatar src={data.avatar} />
              <Box>
                <Typography>{data.user}</Typography>
                <Typography
                  sx={{
                    color: "#777",
                    fontSize: 14,
                  }}
                >
                  {data.date}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                backgroundColor: "rgb(0, 171, 85)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiOutlineShareAlt size={20} />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
