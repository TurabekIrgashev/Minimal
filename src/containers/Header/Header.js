import { Avatar, Box, Container, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { FiSearch, FiUsers } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import IconBtn from "../../components/IconBtn/IconBtn";
import { useSelector } from "react-redux";
import Language from "../../components/Language/Language";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => (window.onscroll = () => setScroll(window.scrollY > 80)), []);

  return (
    <Box
      sx={{
        height: scroll ? "60px" : "60px",
        position: "sticky",
        top: 0,
        left: "64px",
        display: "flex",
        alignItem: "center",
        width: "calc(100% - 64px)",
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
      component="nav"
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          px: 5,
          ml: 9,
        }}
      >
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
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconBtn>
              <FiSearch />
            </IconBtn>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Language />
            <IconButton
              sx={{
                fontSize: "20px",
                position: "relative",
                translate: 0.2,
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Box
                sx={{
                  width: "17px",
                  height: "17px",
                  position: "absolute",
                  bgcolor: "red",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontsize: "10px !important",
                  top: "2px",
                  right: "2px",
                  borderRadius: "50%",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                2
              </Box>
              <FaBell />
            </IconButton>
            <IconBtn sx={{ fontSize: "22px" }}>
              <FiUsers />
            </IconBtn>
            <Avatar
              sx={{
                translate: "0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                width: "37px",
                height: "37px",
              }}
              alt="Cindy Baker"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
