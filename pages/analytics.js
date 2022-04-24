import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { AiFillAndroid, AiFillWindows, AiFillBug } from "react-icons/ai";
import { DiApple } from "react-icons/di";
import MixedCharts from "../src/components/Charts/MixedChart";
import PieChart from "../src/components/Charts/PieChart";
import BarChart from "../src/components/Charts/BarChart";
import Radar from "../src/components/Charts/Radar";
import TimelineSep from "../src/components/Timeline";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsGoogle, BsFillCheckSquareFill, BsSquare } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import Check from "../src/components/CheckBox/index";
import ShadowBox from "../src/components/ShadowBox";
import BoxTitle from "../src/components/BoxTitle";

const Analitics = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const news = [
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/covers/cover_1.jpg",
      title: "Apply These 7 Secret Techniques To Improve Event",
      description:
        "Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentiu",
      time: "about 6 hours ago",
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/covers/cover_2.jpg  ",
      title: "Believing These 7 Myths About Event Keeps You From Growing",
      description:
        "Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam",
      time: "1 day ago",
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/covers/cover_3.jpg",
      title: "Don't Waste Time! 7 Facts Until You Reach Your Event",
      description:
        "Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum suscipit et ipsum et consequatur",
      time: "2 days ago",
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/covers/cover_4.jpg",
      title: "How 7 Things Will Change The Way You Approach Event",
      description:
        "Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciun",
      time: "3 days ago",
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/covers/cover_1.jpg",
      title:
        "Event Awards: 7 Reasons Why They Don't Work & What You Can Do About It",
      description:
        "Nihil ea sunt facilis praesentium atque. Ab animi alias sequi molestias aut velit ea. Sed possimus eos. Et est ",
      time: "4 days ago",
    },
  ];

  return (
    <Box>
      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ color: "#212b36", mb: 5.5 }}
      >
        Hi, Welcome back
      </Typography>
      <Grid container sx={{ mb: 3 }} spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            sx={{
              bgcolor: "rgb(200, 250, 205)",
              borderRadius: "16px",
              py: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                color: "rgb(0, 123, 85)",
                fontSize: "24px",
                mb: 4,
              }}
            >
              <AiFillAndroid />
            </Box>
            <Typography
              variant="h4"
              sx={{ color: "#005249", fontSize: "30px", mb: 0.5 }}
              fontWeight="600"
            >
              714k
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.875rem",
                color: "#38826E",
                fontWeight: "500",
              }}
            >
              Weekly Sales
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            sx={{
              bgcolor: "rgb(208, 242, 255)",
              borderRadius: "16px",
              py: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                color: "rgb(12, 83, 183)",
                fontSize: "24px",
                mb: 4,
              }}
            >
              <DiApple />
            </Box>
            <Typography
              variant="h4"
              sx={{ color: "rgb(4, 41, 122)", fontSize: "30px", mb: 0.5 }}
              fontWeight="600"
            >
              714k
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.875rem",
                color: "#3E61A0",
                fontWeight: "500",
              }}
            >
              Weekly Sales
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            sx={{
              bgcolor: "rgb(255, 247, 205)",
              borderRadius: "16px",
              py: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                color: "rgb(183, 129, 3)",
                fontSize: "24px",
                mb: 4,
              }}
            >
              <AiFillWindows />
            </Box>
            <Typography
              variant="h4"
              sx={{ color: "rgb(122, 79, 1)", fontSize: "30px", mb: 0.5 }}
              fontWeight="600"
            >
              714k
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.875rem",
                color: "#A68746",
                fontWeight: "500",
              }}
            >
              Weekly Sales
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            sx={{
              bgcolor: "rgb(255, 231, 217)",
              borderRadius: "16px",
              py: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                color: "rgb(183, 33, 54)",
                fontSize: "24px",
                mb: 4,
              }}
            >
              <AiFillBug />
            </Box>
            <Typography
              variant="h4"
              sx={{ color: "rgb(122, 12, 46)", fontSize: "30px", mb: 0.5 }}
              fontWeight="600"
            >
              714k
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.875rem",
                color: "#A04A5E",
                fontWeight: "500",
              }}
            >
              Weekly Sales
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 3 }} spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
          <ShadowBox>
            <BoxTitle>Website Visits</BoxTitle>
            <Typography
              sx={{ fontSize: "0.875rem", color: "rgb(99, 115, 129)", mb: 3 }}
            >
              (+43%) than last year
            </Typography>
            <MixedCharts />
          </ShadowBox>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ShadowBox>
            <BoxTitle>Current Visits</BoxTitle>
            <PieChart />
          </ShadowBox>
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 3 }} spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
          <ShadowBox>
            <BoxTitle>Conversion Rates</BoxTitle>
            <Typography
              sx={{ fontSize: "0.875rem", color: "rgb(99, 115, 129)", mb: 1 }}
            >
              (+43%) than last year
            </Typography>
            <BarChart />
          </ShadowBox>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ShadowBox>
            <BoxTitle>Current Subject</BoxTitle>
            <Radar />
          </ShadowBox>
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 3 }} spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
          <ShadowBox sx={{ p: 0 }}>
            <Box sx={{ p: 3 }}>
              <BoxTitle>News Update</BoxTitle>
              <Box>
                {/* Mapped News Here */}
                {news.map((obj, i) => (
                  <Box
                    key={obj.title}
                    sx={{ display: "flex", overflow: "hidden", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: "48px",
                        height: "48px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        mr: 2,
                      }}
                      component="img"
                      src={obj.img}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          overflow: "hidden",
                          // textOverflow: "ellipsis",
                          // flex: 1,
                          width: "80%",
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="a"
                          sx={{
                            fontSize: "14px",
                            "&:hover": { textDecoration: "underline" },
                            cursor: "pointer",
                            width: "100%",
                          }}
                        >
                          {obj.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "gray",
                            width: "100%",
                            fontSize: "14px",
                          }}
                          noWrap
                        >
                          {obj.description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          width: "auto",
                          textAlign: "right",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "gray",
                          }}
                          noWrap
                        >
                          {obj.time}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Divider sx={{ mt: "-20px" }} />
            <Box sx={{ p: 2, textAlign: "right" }}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "#212b36",
                  borderRadius: "10px",
                  py: 0.5,
                  "& svg": {
                    fontSize: "18px",
                  },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: "13px",
                    fontWeight: "600",
                    mr: 1,
                  }}
                >
                  View All
                </Typography>{" "}
                <RiArrowRightSLine />
              </Button>
            </Box>
          </ShadowBox>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ShadowBox>
            <BoxTitle>Order Timeline</BoxTitle>
            <TimelineSep size={32} />
          </ShadowBox>
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 3 }} spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <ShadowBox>
            <BoxTitle>Traffic by Site</BoxTitle>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: "1px solid rgba(145, 158, 171, 0.12)",
                    borderRadius: "8px",
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <FaFacebookF size={28} color="#1877F2" />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fonSize: "1.125rem",
                      mt: 2,
                    }}
                    variant="h6"
                  >
                    323.23k
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.875rem", color: "rgb(99, 115, 129)" }}
                  >
                    FaceBook
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: "1px solid rgba(145, 158, 171, 0.12)",
                    borderRadius: "8px",
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <BsGoogle size={28} color="#DF3E30" />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fonSize: "1.125rem",
                      mt: 2,
                    }}
                    variant="h6"
                  >
                    323.23k
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.875rem", color: "rgb(99, 115, 129)" }}
                  >
                    Google
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: "1px solid rgba(145, 158, 171, 0.12)",
                    borderRadius: "8px",
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <FaLinkedinIn size={28} color="#006097" />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fonSize: "1.125rem",
                      mt: 2,
                    }}
                    variant="h6"
                  >
                    323.23k
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.875rem", color: "rgb(99, 115, 129)" }}
                  >
                    Linkedin
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: "1px solid rgba(145, 158, 171, 0.12)",
                    borderRadius: "8px",
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <FaTwitter size={28} color="#1C9CEA" />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fonSize: "1.125rem",
                      mt: 2,
                    }}
                    variant="h6"
                  >
                    323.23k
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.875rem", color: "rgb(99, 115, 129)" }}
                  >
                    Twitter
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </ShadowBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <ShadowBox>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.125rem", mb: 2 }}
              gutterBottom
            >
              Tasks
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
                gap: 2.5,
              }}
            >
              {[
                "Create FireStone Logo",
                "Add SCSS and JS files if required",
                "Stakeholder Meeting",
                "Scoping & Estimations",
                "Sprint Showcase",
              ].map((label, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Check>{label}</Check>
                  <IconButton>
                    <HiDotsVertical fontSize="20" />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </ShadowBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analitics;
