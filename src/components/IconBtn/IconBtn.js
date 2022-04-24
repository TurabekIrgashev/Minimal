import { IconButton } from "@mui/material";

const IconBtn = ({ sx, children, ...props }) => {
  return (
    <IconButton
      sx={{
        "&:hover": {
          "& svg": {
            transform: "scale(1.15)",
          },
        },
        translate: 0.2,
        width: "45px",
        height: "45px",
        // p: 1.5,
        ...sx,
      }}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default IconBtn;
