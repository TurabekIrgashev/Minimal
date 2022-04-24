import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Divider, Grid, TextareaAutosize } from "@mui/material";
import ShadowBox from "../../../../components/ShadowBox";
import BoxTitle from "../../../../components/BoxTitle";
import { ImLocation2 } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { ImLinkedin2, ImTwitter } from "react-icons/im";
import { RiInstagramFill, RiSearchLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import Post from "../Post/post";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"; // import { styled } from "@mui/system";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FollowCard from "../FollowCard";
import Search from "../../../../components/Search/input";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const about = [
    {
      icon: <ImLocation2 fontSize="18px" />,
      text: "Live at",
      linkText: "Madagascar",
      link: "https://www.google.com/maps/place/%D0%9C%D0%B0%D0%B4%D0%B0%D0%B3%D0%B0%D1%81%D0%BA%D0%B0%D1%80/@-18.6080848,37.826244,5z/data=!3m1!4b1!4m5!3m4!1s0x21d1a4e3ea238545:0x5244e3c1977b1388!8m2!3d-18.766947!4d46.869107",
    },
    {
      icon: <AiFillMail fontSize="18px" />,
      text: "ashlynn_ohara62@gmail.com",
    },
    {
      icon: <BsFillBriefcaseFill fontSize="18px" />,
      text: "Manager at",
      linkText: "Gleichner, Mueller and Tromp",
    },
    {
      icon: <BsFillBriefcaseFill fontSize="18px" />,
      text: "Studied at",
      linkText: "Nikolaus - Leuschke",
    },
  ];

  const socials = [
    {
      icon: <ImLinkedin2 color="rgb(0, 96, 151)" fontSize="18px" />,
      linkText: "https://www.linkedin.com/in/caitlyn.kerluke",
      link: "https://www.linkedin.com/in/caitlyn.kerluke",
    },
    {
      icon: <ImTwitter color="rgb(28, 156, 234)" fontSize="18px" />,
      linkText: "https://www.twitter.com/caitlyn.kerluke",
      link: "https://www.twitter.com/caitlyn.kerluke",
    },
    {
      icon: <RiInstagramFill color="rgb(215, 51, 109)" fontSize="18px" />,
      linkText: "https://www.instagram.com/caitlyn.kerluke",
      link: "https://www.instagram.com/caitlyn.kerluke",
    },
    {
      icon: <FaFacebookF color="rgb(24, 119, 242)" fontSize="18px" />,
      linkText: "https://www.facebook.com/caitlyn.kerluke",
      link: "https://www.facebook.com/caitlyn.kerluke",
    },
  ];

  const posts = [
    {
      title: "Minimal UI",
      avatar: "/avatar.jpg",
      text: "Assumenda nam repudiandae rerum fugiat vel maxime.",
      img: "/feed.jpg",
      likesAvatar: [
        "/avatar_3.jpg",
        "/avatar_4.jpg",
        "/avatar_5.jpg",
        "/avatar_7.jpg",
        "/avatar_8.jpg",
      ],
      comments: [
        {
          avatar: "/avatar_3.jpg",
          author: "Lainey Davidson",
          text: "Praesent venenatis metus at",
          date: "21 March 2022",
        },
        {
          avatar: "/avatar_8.jpg",
          author: "Cristopher Cardenas",
          text: "Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.",
          date: "20 March 2022",
        },
      ],
    },
    {
      title: "Minimal UI",
      avatar: "/avatar.jpg",
      text: "Quis veniam aut saepe aliquid nulla.",
      img: "/feed_2.jpg",
      likesAvatar: [
        "/avatar_3.jpg",
        "/avatar_4.jpg",
        "/avatar_5.jpg",
        "/avatar_7.jpg",
        "/avatar_8.jpg",
      ],
      comments: [
        {
          avatar: "/avatar_6.jpg",
          author: "Cristopher Cardenas",
          text: "Praesent venenatis metus at",
          date: "21 March 2022",
        },
        {
          avatar: "/avatar_11.jpg",
          author: "Melanie Noble",
          text: "Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.",
          date: "20 March 2022",
        },
      ],
    },
    {
      title: "Minimal UI",
      avatar: "/avatar.jpg",
      text: "Reprehenderit ut voluptas sapiente ratione nostrum est.",
      img: "/feed_3.jpg",
      likesAvatar: [
        "/avatar_3.jpg",
        "/avatar_4.jpg",
        "/avatar_5.jpg",
        "/avatar_7.jpg",
        "/avatar_8.jpg",
      ],
    },
  ];

  const followers = [
    {
      location: "Kenya",
      fullName: "Jayvion Simon",
      img: "/avatar_1.jpg",
      fwlld: true,
    },
    {
      location: "Madagascar",
      fullName: "Lucian Obrien",
      img: "/avatar_2.jpg",
      fwlld: true,
    },
    {
      location: "Netherlands Antilles",
      fullName: "Deja Brady",
      img: "/avatar_3.jpg",
      fwlld: true,
    },
    {
      location: "Azerbaijan",
      fullName: "Harrison Stein",
      img: "/avatar_4.jpg",
      fwlld: true,
    },
    {
      location: "Aruba",
      fullName: "Reece Chung",
      img: "/avatar_5.jpg",
      fwlld: false,
    },
    {
      location: "Comoros",
      fullName: "Lainey Davidson",
      img: "/avatar_6.jpg",
      fwlld: true,
    },
    {
      location: "Sierra Leone",
      fullName: "Cristopher Cardenas",
      img: "/avatar_7.jpg",
      fwlld: false,
    },
    {
      location: "Bermuda",
      fullName: "Melanie Noble",
      img: "/avatar_8.jpg",
      fwlld: false,
    },
    {
      location: "Italy",
      fullName: "Chase Day",
      img: "/avatar_9.jpg",
      fwlld: false,
    },
    {
      location: "Iran",
      fullName: "Shawn Manning",
      img: "/avatar_10.jpg",
      fwlld: false,
    },
    {
      location: "Denmark",
      fullName: "Soren Durham",
      img: "/avatar_11.jpg",
      fwlld: false,
    },
    {
      location: "Congo",
      fullName: "Cortez Herring",
      img: "/avatar_12.jpg",
      fwlld: true,
    },
    {
      location: "Cambodia",
      fullName: "Brycen Jimenez",
      img: "/avatar_13.jpg",
      fwlld: true,
    },
    {
      location: "Italy",
      fullName: "Chase Day",
      img: "/avatar_9.jpg",
      fwlld: false,
    },
    {
      location: "Comoros",
      fullName: "Lainey Davidson",
      img: "/avatar_6.jpg",
      fwlld: true,
    },
    {
      location: "Sierra Leone",
      fullName: "Cristopher Cardenas",
      img: "/avatar_7.jpg",
      fwlld: false,
    },
    {
      location: "Bermuda",
      fullName: "Melanie Noble",
      img: "/avatar_8.jpg",
      fwlld: false,
    },
    {
      location: "Italy",
      fullName: "Chase Day",
      img: "/avatar_9.jpg",
      fwlld: false,
    },
  ];

  // title={post.title}
  //               avatar={post.avatar}
  //               date={post.date}
  //               text={post.text}
  //               img={post.img}
  //               likesAvatar={post.likesAvatar}
  //               comments={post.comments}

  return (
    <Box sx={{ width: "100%", p: 0 }}>
      <ShadowBox sx={{ p: 0, mb: 3 }}>
        <Box
          sx={{
            borderRadius: "16px 16px 0 0",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "280px",
            backgroundSize: "cover",
            backgroundImage:
              "url(https://minimal-assets-api.vercel.app/assets/images/covers/cover_2.jpg)",
          }}
        ></Box>
        <Box
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ py: 0, color: "black" }}
          >
            <Tab
              sx={{ py: 0, textTransform: "capitalize" }}
              label="Item One"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ py: 0, textTransform: "capitalize" }}
              label="Item Two"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ py: 0, textTransform: "capitalize" }}
              label="Item Three"
              {...a11yProps(2)}
            />
            <Tab
              sx={{ py: 0, textTransform: "capitalize" }}
              label="Item Three"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
      </ShadowBox>

      <TabPanel
        value={value}
        index={0}
        sx={{
          padding: "0 !important",
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <ShadowBox
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  py: 0.5,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", fontSize: 24 }}
                >
                  57,097
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#637381" }}>
                  Follower
                </Typography>
              </Box>
              <Divider orientation="vertical" sx={{ color: "red", py: 3.5 }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  py: 0.5,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", fontSize: 24 }}
                >
                  59,060
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#637381" }}>
                  Following
                </Typography>
              </Box>
            </ShadowBox>
            <ShadowBox sx={{ width: "100%" }}>
              <BoxTitle>About</BoxTitle>
              <Typography
                sx={{ fontSize: "14px", color: "#212b36" }}
                gutterBottom
              >
                Tart I love sugar plum I love oat cake. Sweet roll caramels I
                love jujubes. Topping cake wafer..
              </Typography>
              {about.map((list, i) => (
                <Box sx={{ display: "flex", alignItems: "center", mt: 2.3 }}>
                  {list?.icon}
                  <Typography sx={{ fontSize: "14px", ml: 1.5 }}>
                    {list?.text}{" "}
                    {list?.linkText && (
                      <Typography
                        component="a"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          cursor: "pointer",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                        href={list.link}
                      >
                        {list.linkText}
                      </Typography>
                    )}
                  </Typography>
                </Box>
              ))}
            </ShadowBox>
            <ShadowBox sx={{ width: "100%" }}>
              <BoxTitle>Social</BoxTitle>
              {socials.map((list, i) => (
                <Box sx={{ display: "flex", alignItems: "center", mt: 2.3 }}>
                  {list?.icon}
                  <Typography sx={{ fontSize: "14px", ml: 1.5 }}>
                    {list?.text}{" "}
                    {list?.linkText && (
                      <Typography
                        component="a"
                        sx={{
                          fontSize: "14px",
                          cursor: "pointer",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                        href={list?.link}
                      >
                        {list?.linkText}
                      </Typography>
                    )}
                  </Typography>
                </Box>
              ))}
            </ShadowBox>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <ShadowBox sx={{ width: "100%" }}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                placeholder="Share what you are thinking here..."
                style={{
                  width: "100%",
                  resize: "none",
                  outline: "none",
                  padding: 16,
                  borderRadius: 8,
                  borderColor: "#E0E3E7",
                  fontSize: 16,
                }}
              />
              <Box
                sx={{
                  px: 1,
                  mt: 2.5,
                  display: "flex",
                  align: "center",
                  align: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    align: "center",
                  }}
                >
                  <Box sx={{ mr: 1.5 }}>
                    <label for="file-upload" class="custom-file-upload">
                      <AddPhotoAlternateIcon
                        sx={{
                          fontSize: "26px",
                          cursor: "pointer",
                          color: "gray",
                        }}
                      />
                    </label>
                    <input
                      style={{ display: "none" }}
                      id="file-upload"
                      type="file"
                    />
                  </Box>
                  <Box>
                    <label for="file-upload" class="custom-file-upload">
                      <AttachFileIcon
                        sx={{
                          fontSize: "26px",
                          cursor: "pointer",
                          color: "gray",
                        }}
                      />
                    </label>
                    <input
                      style={{ display: "none" }}
                      id="file-upload"
                      type="file"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#00AB55",
                      color: "white",
                      // padding: "8px 16px 6px 16px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textTransform: "capitalize",
                    }}
                  >
                    Post
                  </Button>
                </Box>
              </Box>
            </ShadowBox>
            {posts.map((post, i) => (
              <Post
                title={post.title}
                avatar={post.avatar}
                date={post.date}
                text={post.text}
                img={post.img}
                likesAvatar={post.likesAvatar}
                comments={post.comments}
              />
            ))}
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography
          gutterBottom
          variant="h5"
          fontWeight="600"
          sx={{ color: "#212b36", mb: 2, mt: 5 }}
        >
          Followers
        </Typography>
        <Grid container spacing={3}>
          {followers.map((card, i) => (
            <Grid item xs={12} sm={6} md={4}>
              <FollowCard
                location={card.location}
                fullName={card.fullName}
                img={card.img}
                fwlld={card.fwlld}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography
          gutterBottom
          variant="h5"
          fontWeight="600"
          sx={{ color: "#212b36", mb: 2, mt: 5 }}
        >
          Friends
        </Typography>
        <Search sx={{ mb: 2 }} />
        <Grid container>
          <Grid item xs={6} md={4}>
            <ShadowBox></ShadowBox>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Threee
      </TabPanel>
    </Box>
  );
}
