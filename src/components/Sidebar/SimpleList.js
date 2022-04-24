import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

export default function SimpleList({ data, open = true }) {
  const router = useRouter();
  return (
    <ListItemButton
      onClick={() => router.push(data.to)}
      key={data.text}
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
        color: router.pathname === data.to && "rgb(0, 171, 85)",
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        {data.icon}
      </ListItemIcon>
      <ListItemText
        primary={data.text}
        sx={{ opacity: open ? 1 : 0, color: "#888" }}
      />
    </ListItemButton>
  );
}
