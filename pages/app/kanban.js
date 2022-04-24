import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import BoxTitle from "../../src/components/BoxTitle";
import MainTitle from "../../src/components/mainTitle";
import NavBtns from "../../src/components/NavBtns";
import UnstyledInput from "../../src/components/unstyledInput";
import WrapperBox from "../../src/containers/kanban/WrapperBox";
import { navBtnKanban } from "../../src/data/kanban";

export default function Kanban() {
  const navBtnData = navBtnKanban;
  return (
    <>
      <MainTitle text="Kanban" />
      <NavBtns data={navBtnData} />
      <Box
        mt={5}
        sx={{
          overflowX: "auto",
          display: "flex",
          gap: 3,
        }}
      >
        {["Backlog", "Progress", "Q&A", "Production"].map((t) => (
          <WrapperBox title={t} />
        ))}

        <Box
          sx={{
            width: 300,
          }}
        >
          <UnstyledInput type="Section" />
        </Box>
      </Box>
    </>
  );
}
