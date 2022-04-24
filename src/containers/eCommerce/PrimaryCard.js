import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

export default function PrimaryCard(data) {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 5,
        pb: 3,
        boxShadow:
          " rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={data.data.img}
          alt={data.data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="p" sx={{ fontWeight: "bold" }}>
            {data.data.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 3,
            }}
          >
            <AvatarGroup max={data.data.avatarnumber + 1}>
              <Avatar sx={{ background: `${data.data.avatar1background}` }} />
              <Avatar sx={{ background: `${data.data.avatar2background}` }} />
              <Avatar sx={{ background: `${data.data.avatar3background}` }} />
              <Avatar sx={{ background: `${data.data.avatar4background}` }} />
            </AvatarGroup>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography sx={{ color: "gray" }}>
                <del>{data.data.oldprice}</del>
              </Typography>
              <Typography>{data.data.newprice}</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ position: "absolute", top: "10px", right: "10px" }}>
        <Button
          disabled
          sx={{
            background: `${data.data.buttonbackground}`,
            color: "white",
            borderRadius: 3,
          }}
          size="small"
        >
          {data.data.button}
        </Button>
      </CardActions>
    </Card>
  );
}
