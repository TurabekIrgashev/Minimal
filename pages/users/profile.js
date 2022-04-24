import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import BasicTabs from "../../src/containers/User/Profile/BasicTabs/index";

const Profile = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Typography
        gutterBottom
        variant="h5"
        fontWeight="600"
        sx={{ color: "#212b36", mb: 2 }}
      >
        Profile
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 4 }}>
        <Typography
          sx={{
            fontSize: 14,
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          component="a"
        >
          <Link href="/home">
            <a>Dashboard</a>
          </Link>
        </Typography>
        <BsDot fontSize={22} color="#919eab" />
        <Typography
          sx={{
            fontSize: 14,
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          component="a"
        >
          <Link href="/users/profile">
            <a>User</a>
          </Link>
        </Typography>
        <BsDot fontSize={22} color="#919eab" />
        <Typography sx={{ fontSize: 14 }} component="a" color="#919eab">
          Minimal UI
        </Typography>
      </Box>
      <BasicTabs />
    </Box>
  );
};

export default Profile;
