import { Box } from "@mui/material";
import React from "react";

export default function CircleBox(props) {
  return (
    <>
      <Box
        sx={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "#999",
          ...props.sx,
        }}
      ></Box>
    </>
  );
}
