import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Link } from "@mui/material";
import { BiMessageRoundedDots } from "react-icons/bi";
import { AiOutlineShareAlt, AiOutlineEye } from "react-icons/ai";
export default function MainCard({ data }) {
  return (
    <Card
      sx={{
        borderRadius: 5,
        pb: 3,
        boxShadow:
          " rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={data.img}
        alt="green iguana"
      />
      <CardContent>
        <Avatar
          src={data.avatar}
          sx={{
            mt: -5,
          }}
        />
        <Typography variant="body2" color="text.secondary" my={1.5}>
          {data.date}
        </Typography>
        <Link
          to={"/"}
          color={"#000"}
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {data.title}
        </Link>
      </CardContent>
      <CardActions>
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
      </CardActions>
    </Card>
  );
}
