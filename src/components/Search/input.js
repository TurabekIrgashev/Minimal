import { Box } from "@mui/material";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = ({ placeholder = "Find friends...", setter, sx }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Box
      sx={{
        width: focused ? "320px" : "250px",
        border: "1px solid #DCE0E4",
        p: 2.5,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        transition: "0.5s",
        ...sx,
      }}
    >
      <RiSearchLine fontSize="19" color="#919EAB" style={{ marginRight: 8 }} />
      <Box
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setter(e.target.value)}
        component="input"
        placeholder={placeholder}
        sx={{
          border: "none",
          outline: "none",
          fontSize: "16px",
          width: "80%",
        }}
      />
    </Box>
  );
};

export default Search;
