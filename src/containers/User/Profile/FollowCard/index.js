import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ShadowBox from "../../../../components/ShadowBox";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const FollowCard = ({ location, fullName, img, fwlld }) => {
  const [follow, setFollow] = useState(fwlld);

  return (
    <ShadowBox sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Avatar
        sx={{ width: "48px", height: "48px", mr: 2 }}
        src={img ? img : "/avatar.jpg"}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "bold" }}
            gutterBottom
          >
            {fullName}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              p: 0,
              color: "#637381",
            }}
          >
            <FmdGoodIcon sx={{ color: "black", mr: 0.5, fontSize: "18px" }} />
            {location}
          </Typography>
        </Box>
        <Button
          onClick={() => setFollow((p) => !p)}
          sx={{
            textTransform: "capitalize",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: "500",
            padding: "3px 9px",
            border: !follow ? "1px solid #DCE0E4" : "1px solid transparent",
            "&:hover": { bgcolor: follow && "#EBF8F2" },
            color: follow ? "#00ba55" : "#212b36",
          }}
        >
          {follow && <FiCheck style={{ marginRight: 7, fontSize: 18 }} />}
          {follow ? "Followed" : "Follow"}
        </Button>
      </Box>
    </ShadowBox>
  );
};

export default FollowCard;
