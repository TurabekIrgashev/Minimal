import { HdrPlusOutlined, PlusOne, PlusOneSharp } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import GreenBtn from "../../src/components/GreenBtn";
import MainTitle from "../../src/components/mainTitle";
import NAvBtns from "../../src/components/NavBtns";
import { AiOutlinePlus } from "react-icons/ai";
import SearchInput from "../../src/containers/blog/SearchInput";
import SecondaryCard from "../../src/containers/blog/SecondaryCard";
import MainCard from "../../src/containers/blog/mainCard";
import { blogMainData } from "../../src/data/blog";
export default function Posts() {
  const navData = [
    {
      title: "Dashborad",
      nav: "/home",
      disabled: false,
      circle: false,
    },
    {
      title: "Blog",
      nav: "/blog/posts",
      disabled: false,
      circle: true,
    },
    {
      title: "Posts",
      nav: "blog/posts",
      disabled: true,
      circle: true,
    },
  ];
  const mainCard = blogMainData;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <MainTitle text="Blog" />
          <NAvBtns data={navData} />
        </Box>
        <GreenBtn title="New Post" icon={<AiOutlinePlus size={20} />} />
      </Box>
      <SearchInput
        sx={{
          my: 4,
        }}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SecondaryCard
            data={[
              {
                avatar:
                  "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg",
                img: "https://minimal-assets-api.vercel.app/assets/images/covers/cover_1.jpg",
                date: "12 March 2022",
                title: "Apply These 7 Secret Techniques To Improve Event",
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {[
              {
                avatar:
                  "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
                date: "14 March 2022",
                title:
                  "Believing These 7 Myths About Event Keeps You From Growing",
                img: "https://minimal-assets-api.vercel.app/assets/images/covers/cover_2.jpg",
              },
              {
                avatar:
                  "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg",
                date: "12 March 2022",
                title: "Don't Waste Time! 7 Facts Until You Reach Your Event",
                img: "https://minimal-assets-api.vercel.app/assets/images/covers/cover_2.jpg",
              },
            ].map((d) => (
              <Grid key={d.title} item xs={12} md={6}>
                <SecondaryCard data={[d]} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
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
