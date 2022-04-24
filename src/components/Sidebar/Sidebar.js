import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { appSidebar, general, menegment } from "../../data/home";
import Image from "next/image";
import { ChevronLeft, ChevronRightRounded } from "@mui/icons-material";
import Header from "../../containers/Header/Header";
import NestedList from "./NestedList";
import SimpleList from "./SimpleList";
import SidebarTitle from "./SidebarTitle";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "transparent",
  boxShadow: "none",
  color: "black",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const generalData = general;
  const appData = appSidebar;
  const menegmentData = menegment;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Typography>Home</Typography>
      <AppBar position="fixed" open={open}>
        <Header />
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        onMouseOver={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
              width: 50,
            }}
          >
            <Image
              src="/Logo.svg"
              width={"100%"}
              height={"100%"}
              alt="Picture of the author"
            />
          </IconButton>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              display: !open && "none",
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightRounded />
            ) : (
              <ChevronLeft />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              backgroundColor: open && "rgba(145, 158, 171, 0.12)",
              transition: "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              padding: "16px 20px",
              borderRadius: "12px",
              mx: open && 1,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Avatar src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
              Minimal Ui Admin
            </ListItemText>
          </ListItemButton>

          <SidebarTitle text={"General"} />
          {generalData.map((item, index) => (
            <SimpleList data={item} open={open} />
          ))}

          <SidebarTitle text={"Menegment"} />

          {menegmentData.map((item) => (
            <NestedList data={item} openSidebar={open} />
          ))}

          <SidebarTitle text={"App"} open={open} />
          {appData.map((item, index) => (
            <SimpleList data={item} open={open} />
          ))}
        </List>

        <Box
          sx={{
            textAlign: "center",
            display: !open && "none",
          }}
        >
          <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>
            Hi! Minimal Ui
          </Typography>
          <Typography
            sx={{ color: "#777", mt: 0.3, cursor: "pointer", fontSize: 14 }}
          >
            Need help?
          </Typography>
          <Typography
            sx={{ color: "#777", mt: 0.3, cursor: "pointer", fontSize: 13 }}
          >
            Please check our docs
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{
              backgroundColor: "rgb(0, 171, 85)",
              width: "150px",
              mx: "auto",
              color: "#fff",
              boxShadow: "rgb(0 171 85 / 24%) 0px 8px 16px 0px",
              fontSize: 12,
              fontWeight: "bold",
              textTransform: "capitalize",
              mt: 1,
            }}
          >
            Documentation
          </Button>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, px: 3, pt: 10 }}>
        {children}
      </Box>
    </Box>
  );
}
