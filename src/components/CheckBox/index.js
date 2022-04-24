import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Check = ({ children }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
      <IconButton onClick={() => setChecked((p) => !p)}>
        <Box
          sx={{
            width: 18,
            height: 18,
            display: "flex",
            border: `2px solid ${checked ? "#00AB55" : "#637381"}`,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
            bgcolor: checked && "#00AB55",
          }}
        >
          {checked && (
            <AiOutlineCheck fontSize={12} color={checked && "white"} />
          )}
        </Box>
      </IconButton>
      <Typography
        onClick={() => setChecked((p) => !p)}
        fontSize="14px"
        color="#212b36"
        sx={{
          textDecoration: checked && "line-through",
          color: checked && "#A6B0BB",
          cursor: "pointer",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default Check;
