import * as React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import CircleBox from "../containers/blog/CircleBox";

export default function NavBtns(props) {
  const router = useRouter();
  const data = props.data;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {data.map((d) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {d.circle && (
            <CircleBox
              sx={{
                mx: 1,
              }}
            />
          )}
          <Button
            disabled={d.disabled}
            onClick={() => d.to && router.push(d.to)}
            sx={{
              cursor: "pointer",
              display: "inline",
              color: "#777",
              borderRadius: 0,
              backgroundColor: "transparent",
              borderBottom: "1px solid transparent",
              "&:hover": {
                backgroundColor: "transparent",
                backgroundImage: "none",
                borderColor: "#000",
              },
              fontSize: 14,
              textTransform: "capitalize",
              boxShadow: "none",
              pl: 0,
              pb: 0,
            }}
          >
            {d.title}
          </Button>
        </Box>
      ))}
    </Box>
  );
}
