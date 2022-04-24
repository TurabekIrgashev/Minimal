import { Typography } from "@mui/material";

const BoxTitle = ({ children, sx }) => {
  return (
    <Typography
      variant="h6"
      // fontWeight="600"
      sx={{ fontSize: "1.125rem", mb: 3, ...sx }}
      gutterBottom
    >
      {children}
    </Typography>
  );
};

export default BoxTitle;
