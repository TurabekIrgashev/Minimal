import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Checkbox,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MainTitle from "../../src/components/mainTitle";
import NavBtns from "../../src/components/NavBtns";
import MainPostCard from "../../src/containers/blog/post/mainPostCard";
import Paragraph from "../../src/containers/blog/post/paragraph";
import SecondaryNavBtn from "../../src/containers/blog/post/SecondaryNavBtn";
import { blogMainData, postNavData, postUsers } from "../../src/data/blog";
import { AiFillHeart } from "react-icons/ai";
import AvatarGroupCom from "../../src/containers/blog/post/AvatarGroup";
import Comments from "../../src/containers/blog/post/Comments";
import BasicPagination from "../../src/containers/blog/Pagination";
import GreenBtn from "../../src/components/GreenBtn";
import MainInput from "../../src/containers/blog/post/MainInput";
import MainCard from "../../src/containers/blog/mainCard";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Post() {
  const navData = postNavData;
  const usersData = postUsers;
  const mainCard = blogMainData;

  return (
    <>
      <MainTitle text={"Post Details"} />
      <NavBtns data={navData} />
      <Box mt={2}>
        <MainPostCard
          data={{
            title: "Apply These 7 Secret Techniques To Improve Event",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg",
            bg: "	https://minimal-assets-api.vercel.app/assets/images/covers/cover_1.jpg",
            user: "Jayvion Simon",
            date: "15 March 2022",
          }}
        />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: "bold" }} mt={2}>
        Assumenda nam repudiandae rerum fugiat vel maxime.
      </Typography>
      {["h1", "h2", "h3", "h4", "h5", "h6"].map((item) => (
        <Paragraph key={item} type={item} />
      ))}
      <Divider
        sx={{
          my: 2,
        }}
      />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
        }}
      >
        Paragraph
      </Typography>
      <Typography mt={2}>What is MTAweb Directory?</Typography>
      <Typography mt={2}>
        So you have heard about this site or you have been to it, but you cannot
        figure out what it is or what it can do. MTA web directory is the
        simplest way in which one can bid on a link, or a few links if they wish
        to do so. The link directory on MTA displays all of the links it
        currently has, and does so in alphabetical order, which makes it much
        easier for someone to find what they are looking for if it is something
        specific and they do not want to go through all the other sites and
        links as well. It allows you to start your bid at the bottom and slowly
        work your way to the top of the list.
      </Typography>
      <Typography mt={2}>
        So you have heard about this site or you have been to it, but you cannot
        figure out what it is or what it can do. MTA web directory is the
        simplest way in which one can bid on a link, or a few links if they wish
        to do so. The link directory on MTA displays all of the links it
        currently has, and does so in alphabetical order, which makes it much
        easier for someone to find what they are looking for if it is something
        specific and they do not want to go through all the other sites and
        links as well. It allows you to start your bid at the bottom and slowly
        work your way to the top of the list.
      </Typography>
      <MainPostCard
        sx={{
          mt: 2,
        }}
        data={{
          bg: "https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg",
        }}
      />
      <Typography my={5}>
        It is important that you buy links because the links are what get you
        the results that you want. The popularity of the links that are listed
        in the MTA directory is in fact one of the most important factors in the
        performance of the search engine. Links are important and this is why
        you have to purchase a link in order to bid on something and the best
        part is that a link will only cost you $1, which is nothing compared to
        what you would pay if you decided to do it through any other company or
        website.
      </Typography>
      <MainPostCard
        data={{
          bg: "https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg",
        }}
      />
      <Divider
        sx={{
          my: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        {["Lamp", "A Man", "Human", "Lantern", "Festival"].map((item) => (
          <SecondaryNavBtn key={item} title={item} />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: 3,
        }}
      >
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<AiFillHeart size={24} color={"red"} />}
        />
        <Typography>7.7k</Typography>
        <AvatarGroupCom />
      </Box>
      <Divider
        sx={{
          my: 5,
        }}
      />
      <MainTitle text={"Comments"} />
      <Comments data={usersData} />
      <BasicPagination
        count={8}
        sx={{
          ml: "auto",
        }}
      />
      <Box
        sx={{ backgroundColor: " rgb(244, 246, 248)", p: 3, borderRadius: 3 }}
      >
        <MainTitle text="Add Comment" />
        {["Comment", "Name", "Email"].map((item) => (
          <MainInput label={item} />
        ))}

        <GreenBtn
          title="Post Comment"
          sx={{
            ml: "auto",
          }}
        />
      </Box>
      <Grid container spacing={3} mt={5}>
        {mainCard.map((d) => (
          <Grid key={d.title} item xs={12} sm={6} md={4} xl={3}>
            <MainCard data={d} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
