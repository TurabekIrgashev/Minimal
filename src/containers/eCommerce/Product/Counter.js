import { Box, Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";

const Counter = () => {
  const [numCount, setNumCount] = useState(1);

  const plus = () => {
    setNumCount(numCount + 1);
  };
  const minus = () => {
    if (numCount > 1) {
      setNumCount(numCount - 1);
    }
  };
  const reset = () => {
    setNumCount(0);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        variant="outlined"
        size="small"
        aria-label="outlined button group"
        color="success"
      >
        <Button sx={{ fontSize: "14px" }} onClick={minus}>
          -
        </Button>
        <Button sx={{ borderLeft: "none", fontSize: "14px" }}>
          {numCount}
        </Button>
        <Button onClick={plus} sx={{ borderLeft: "none", fontSize: "14px" }}>
          +
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Counter;
