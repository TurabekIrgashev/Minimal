import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CircleBox from "../../containers/blog/CircleBox";
import { useRouter } from "next/router";

export default function NestedList({ data, openSidebar }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    openSidebar && setOpen(!open);
  };
  console.log(data);
  const router = useRouter();
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{data.icon}</ListItemIcon>
        <ListItemText primary={data.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {data.menu.map((m) => (
        <Collapse key={m.title} in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                color: router.pathname === m.to && "rgb(0, 171, 85)",
              }}
              onClick={() => router.push(m.to)}
            >
              <ListItemIcon>{openSidebar && <CircleBox />}</ListItemIcon>
              <ListItemText primary={m.title} />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
    </List>
  );
}
