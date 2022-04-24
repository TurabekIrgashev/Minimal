import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MiniCardWithChart from "../src/containers/home/MiniCardWithChart";
import CustomizedTables from "../src/containers/home/table";
import TopRelated from "../src/containers/home/topRelated";
import "react-circular-progressbar/dist/styles.css";
import MostInstalled from "../src/containers/home/MostInstalled";
import TopAuthors from "../src/containers/home/TopAuthors";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { DemoPie } from "../src/containers/home/dountChart";
import { AreaInstalled } from "../src/containers/home/AreaInstalled";
import { total } from "../src/data/home";
export default function home() {
  const totalData = total;

  return (
    <Box>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              backgroundColor: "rgb(200, 250, 205)",
              borderRadius: 5,
              minHeight: 280,
              p: 5,
              display: "flex",
              transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              alignItems: "center",
            }}
          >
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                md={6}
                lg={8}
                className="items-center sm:items-start"
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  Welcome back,
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  Minimal UI!
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "1rem",
                  }}
                >
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn&apos;t anything
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    backgroundColor: "rgb(0, 171, 8)",
                    color: "#fff",
                    boxShadow: "rgb(0 171 85 / 24%) 0px 8px 16px 0px",
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    mt: 2,
                    display: "block",
                  }}
                >
                  Go now
                </Button>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/1.svg"
                    alt="book"
                    className="w-6/12 mx-auto sm:w-full my-auto"
                  ></img>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: "100%",
              minHeight: 280,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <Carousel
              autoPlay
              showThumbs={true}
              showStatus={false}
              infiniteLoop={true}
              className="presentation-mode"
            >
              <Box
                sx={{
                  backgroundImage:
                    "url(https://minimal-assets-api.vercel.app/assets/images/feeds/feed_1.jpg)",

                  height: 280,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: " rgba(22, 28, 36, 0.64)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "start",
                    p: 3,
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#777",
                      textTransform: "uppercase",
                    }}
                  >
                    Featured App
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      lineHeight: 2,
                    }}
                  >
                    Lightroom mobile-coloro
                  </Typography>
                  <Typography
                    sx={{
                      color: "#777",
                    }}
                  >
                    Don't Waste Time! 7 Facts Until You Reach Your Event
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundImage:
                    "url(https://minimal-assets-api.vercel.app/assets/images/feeds/feed_3.jpg)",

                  height: 280,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: " rgba(22, 28, 36, 0.64)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "start",
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#777",
                      textTransform: "uppercase",
                    }}
                  >
                    Featured App
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      lineHeight: 2,
                    }}
                  >
                    Lightroom mobile-coloro
                  </Typography>
                  <Typography
                    sx={{
                      color: "#777",
                    }}
                  >
                    Don't Waste Time! 7 Facts Until You Reach Your Event
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundImage:
                    "url(https://minimal-assets-api.vercel.app/assets/images/feeds/feed_2.jpg)",

                  height: 280,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: " rgba(22, 28, 36, 0.64)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "start",
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#777",
                      textTransform: "uppercase",
                    }}
                  >
                    Featured App
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      lineHeight: 2,
                    }}
                  >
                    Lightroom mobile-coloro
                  </Typography>
                  <Typography
                    sx={{
                      color: "#777",
                    }}
                  >
                    Don't Waste Time! 7 Facts Until You Reach Your Event
                  </Typography>
                </Box>
              </Box>
            </Carousel>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={2}>
        {totalData.map((t) => (
          <Grid key={t.title} item xs={12} md={6} lg={4}>
            <MiniCardWithChart data={t} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={5} xl={4}>
          <Box
            sx={{
              mt: 5,
              p: 2,
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
              Current Download
            </Typography>
            <DemoPie />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={7} xl={8}>
          <Box
            sx={{
              mt: 5,
              p: 2,
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
              AreaInstalled
            </Typography>
            <AreaInstalled />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={7} xl={8}>
          <CustomizedTables />
        </Grid>
        <Grid item xs={12} md={5} xl={4}>
          <TopRelated />
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={6} xl={4}>
          <MostInstalled />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <TopAuthors />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <Box
            sx={{
              backgroundColor: "rgb(0, 82, 73)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              borderRadius: 2,
              mb: 2,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 80,
                }}
              >
                <CircularProgressbar
                  value={46}
                  text={"46%"}
                  styles={buildStyles({
                    pathColor: "rgb(0,171,85)",
                    trailColor: "#135C56",
                    textColor: "#fff",
                  })}
                />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                  }}
                >
                  38,786
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                  }}
                >
                  Conversion
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mr: "-30px",
              }}
            >
              <FaUserAlt size={100} color="#1E665E" />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#7A4F01",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 80,
                }}
              >
                <CircularProgressbar
                  value={46}
                  text={"46%"}
                  styles={buildStyles({
                    pathColor: "#F1B600",
                    trailColor: "#7E5C1C",
                    textColor: "#fff",
                  })}
                />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                  }}
                >
                  38,786
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                  }}
                >
                  Conversion
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mr: "-30px",
              }}
            >
              <HiOutlineMail size={100} color="#8A641F" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
