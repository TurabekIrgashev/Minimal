import {
  Chat,
  ChatOutlined,
  Message,
  MessageSharp,
  MessageTwoTone,
  RemoveRedEye,
  RemoveRedEyeSharp,
  Share,
} from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { AiOutlineShareAlt, AiOutlineEye } from "react-icons/ai";
export default function SecondaryCard({ data = [] }) {
  return (
    <>
      {data.map((d) => (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${d.img})`,
            minHeight: 360,
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              backgroundColor: "rgba(22, 28, 36, 0.8)",
              height: "100%",
              color: "#fff",
              justifyContent: "space-between",
              p: 3,
            }}
          >
            <Avatar src={d.avatar} />
            <Box sx={{}}>
              <Typography
                sx={{
                  color: "#777",
                }}
              >
                {d.date}
              </Typography>
              <Typography
                variant="h6"
                mb={2}
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {d.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <BiMessageRoundedDots size={20} color={"#777"} />
                <Typography color={"#777"}>45.5k</Typography>
                <AiOutlineEye size={20} color={"#777"} />
                <Typography color={"#777"}>11.5k</Typography>
                <AiOutlineShareAlt size={20} color={"#777"} />
                <Typography color={"#777"}>9.72k</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}
