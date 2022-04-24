import { Box } from "@mui/material";

const ShadowBox = ({ children, sx }) => {
  return (
    <Box
      sx={{
        p: 3,
        boxShadow:
          "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        borderRadius: "15px",
        width: "100%",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default ShadowBox;
