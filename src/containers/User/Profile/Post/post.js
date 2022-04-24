import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ShadowBox from "../../../../components/ShadowBox";
import { BsThreeDotsVertical, BsFillShareFill } from "react-icons/bs";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { FaHeart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"; // import { styled } from "@mui/system";

const Post = ({ title, avatar, date, text, img, likesAvatar, comments }) => {
  const d = new Date();

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [liked, setLiked] = React.useState(true);

  return (
    <ShadowBox sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Avatar
            sx={{ mr: 2.5 }}
            alt="Remy Sharp"
            src={avatar ? avatar : "/avatar.jpg"}
          />
          <Box>
            <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "gray",
              }}
            >
              {date
                ? date
                : d.getDate() +
                  " " +
                  month[d.getMonth()] +
                  " " +
                  d.getFullYear()}
            </Typography>
          </Box>
        </Box>
        <IconButton>
          <BsThreeDotsVertical fontSize="18" />
        </IconButton>
      </Box>
      <Typography sx={{ fontSize: "16px", mt: 3 }}>{text}</Typography>
      <Box
        component="img"
        src={img ? img : "/feed.jpg"}
        sx={{
          width: "100%",
          mt: 3,
          borderRadius: 2,
          objectFit: "cover",
          height: "400.5px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => setLiked((p) => !p)}>
            <FaHeart fontSize="22" color={liked ? "#FF4842" : "#637381"} />
          </IconButton>
          <Typography sx={{ ml: 0.2, mr: 2, fontSIze: "14px" }}>
            {liked ? 36 : 35}
          </Typography>
          <AvatarGroup max={4}>
            {likesAvatar ? (
              likesAvatar.map((a, i) => (
                <Avatar
                  alt="Remy Sharp"
                  src={a}
                  style={{ width: "32px", height: "32px" }}
                />
              ))
            ) : (
              <>
                <Avatar
                  alt="Remy Sharp"
                  src="/avatar_3.jpg"
                  style={{ width: "32px", height: "32px" }}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/avatar_4.jpg"
                  style={{ width: "32px", height: "32px" }}
                />
                <Avatar
                  alt="Cindy Baker"
                  src="/avatar_5.jpg"
                  style={{ width: "32px", height: "32px" }}
                />
                <Avatar
                  alt="Agnes Walker"
                  src="/avatar_7.jpg"
                  style={{ width: "32px", height: "32px" }}
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/avatar_8.jpg"
                  style={{ width: "32px", height: "32px" }}
                />
              </>
            )}
          </AvatarGroup>
        </Box>

        <Box sx={{ fontSize: "16px" }}>
          <IconButton>
            <RiMessage2Fill fontSize="20px" />
          </IconButton>
          <IconButton>
            <BsFillShareFill fontSize="16px" />
          </IconButton>
        </Box>
      </Box>
      {comments && (
        <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
          {comments.map((comment, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "top", mb: 1.5 }}>
              <Avatar
                alt={comment ? comment.author : "Remy Sharp"}
                src={comment ? comment.avatar : "/avatar_3.jpg"}
                style={{ width: "40px", height: "40px" }}
              />
              <Box
                sx={{
                  bgcolor: "#F4F6F8",
                  ml: 2,
                  p: 2,
                  width: "100%",
                  borderRadius: "8px",
                  py: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "14px" }}>
                    {comment ? comment.author : "Lainey Davidson"}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px", color: "rgb(145, 158, 171)" }}
                  >
                    {comment.date
                      ? comment.date
                      : d.getDate() +
                        " " +
                        month[d.getMonth()] +
                        " " +
                        d.getFullYear()}
                  </Typography>
                </Box>
                <Typography
                  sx={{ mt: 0.75, fontSize: "14px", color: "#637381" }}
                >
                  {comment.text
                    ? comment.text
                    : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                minima atque accusantium voluptates fugit animi libero similique
                facilis iure nesciunt nemo quia voluptatum illo. Dolorum ipsam
                laboriosam culpa quo, est, error consequuntur tenetur expedita
                fuga ipsum repellendus incidunt atque id mollitia quasi iure
                dignissimos quisquam illum architecto perspiciatis maxime sint!`}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
      <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
        <Avatar
          alt="Remy Sharp"
          src={avatar ? avatar : "/avatar_3.jpg"}
          style={{ width: "40px", height: "40px" }}
        />
        <Box
          component="form"
          sx={{
            border: "1px solid #DCE0E4",
            borderRadius: 2,
            ml: 2,
            width: "100%",
            p: 0.25,
            px: 1.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="input"
            type="text"
            sx={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
            placeholder="Write a comment..."
          />
          <IconButton sx={{ p: 0.75 }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              for="file-upload"
              class="custom-file-upload"
            >
              <AddPhotoAlternateIcon
                sx={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "gray",
                }}
              />
            </label>
            <input style={{ display: "none" }} id="file-upload" type="file" />
          </IconButton>
          <IconButton sx={{ p: 0.5 }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              for="file-upload"
              class="custom-file-upload"
            >
              <SentimentVerySatisfiedIcon
                sx={{
                  fontSize: "22px",
                  cursor: "pointer",
                  color: "gray",
                }}
              />
            </label>
            <input style={{ display: "none" }} id="file-upload" type="file" />
          </IconButton>
        </Box>
        <IconButton sx={{ ml: 1 }}>
          <SendRoundedIcon />
        </IconButton>
      </Box>
    </ShadowBox>
  );
};

export default Post;
