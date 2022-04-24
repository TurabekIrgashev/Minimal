import { Box, IconButton, Input } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MainTitle from "../../components/mainTitle";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import { CheckBox } from "@mui/icons-material";

export default function WrapperBox({ children, sx, title = "" }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [addTaskBox, setAddTaskBox] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        color: "rgb(33, 43, 54)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: "8px",
        border: " 1px solid rgba(145, 158, 171, 0.12)",
        backgroundColor: "rgba(145, 158, 171, 0.08)",
        p: 3,
        width: 300,
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MainTitle text={title} varinat={"h6"} />
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AiOutlineEllipsis size={24} />
        </IconButton>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            color: "rgb(255, 72, 66)",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <BsTrash /> Delete section
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <GoPencil />
          Rename section
        </MenuItem>
      </Menu>
      {children}
      {addTaskBox && (
        <Box
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "#fff",
          }}
        >
          <Input placeholder="Task name" />
          <Box>
            <CheckBox />
          </Box>
        </Box>
      )}
      <Button
        onClick={() => setAddTaskBox(!addTaskBox)}
        sx={{
          width: "100%",
          color: "#000",
          textTransform: "capitalize",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: 1,
          py: 1.5,
        }}
      >
        <AiOutlinePlus /> Add Task
      </Button>
    </Box>
  );
}
