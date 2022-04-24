import { Avatar, Box, Button, Divider, Input, Typography } from "@mui/material";
import { display } from "@mui/system";
import React, { useState } from "react";

export default function Comments({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {data.map((d) => (
        <Box mt={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar src={d.avatar} />
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {d.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#777",
                  }}
                >
                  {d.date}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 15,
                  }}
                >
                  {d.message}
                </Typography>
              </Box>
            </Box>
            <Button
              onClick={() => setOpen(!open)}
              sx={{
                color: "rgb(0, 171, 8)",
              }}
            >
              Reply
            </Button>
          </Box>

          {open ? (
            <Input
              placeholder="Writ comment"
              sx={{
                width: "100%",
                my: 1,
                pl: 2,
              }}
            />
          ) : (
            <Divider sx={{ my: 3 }} />
          )}
          {d.replies.map((r) => (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  pl: 5,
                }}
              >
                <Avatar src={r.avatar} />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {r.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#777",
                    }}
                  >
                    {r.date}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 15,
                    }}
                  >
                    {r.message}
                  </Typography>
                </Box>
              </Box>
              <Divider
                sx={{
                  my: 3,
                  ml: 5,
                }}
              />
            </Box>
          ))}
        </Box>
      ))}
    </>
  );
}
