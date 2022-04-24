import { Search } from "@mui/icons-material";
import { Input } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
export default function SearchInput({ sx = {} }) {
  const [input, setInput] = useState(false);

  return (
    <Box
      sx={{
        width: input ? "230px" : "200px",
        display: "flex",
        transition: "1s all",
        alignItems: "center",
        gap: 1,
        boxShadow:
          " rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",

        border: "1px solid #ddd",
        borderRadius: 1,
        py: 1,
        px: 1,
        mt: 2,
        transition: ".5s all",
        ...sx,
      }}
    >
      <FiSearch color="#93A0AD" />
      <input
        onFocus={() => setInput(true)}
        onBlur={() => setInput(false)}
        placeholder="Search post..."
        style={{
          border: "none",
          outline: "none",
          fontSize: 15,
          color: "#93A0AD",
          backgroundColor: "transparent",
          width: "100%",
          "::placeholder": {
            color: "#93A0AD",
          },
        }}
      ></input>
    </Box>
  );
}
