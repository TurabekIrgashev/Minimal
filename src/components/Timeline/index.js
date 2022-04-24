import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

export default function TimelineSep() {
  return (
    <Timeline
      position="right"
      sx={{
        ml: 0,
        "& .css-ha3bif-MuiTimelineItem-root": {
          "&:before": { "-webkit-flex": 0, content: "none" },
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#00AB55", boxShadow: "none" }} />
          <TimelineConnector
            sx={{ width: "2.5px", bgcolor: "rgba(145, 158, 171, 0.24)" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ pl: 1.5 }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }} gutterBottom>
            1983, orders, $4220
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "12px" }}>
            13 Mar 2022 3:09 PM
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#54D62C", boxShadow: "none" }} />
          <TimelineConnector
            sx={{ width: "2.5px", bgcolor: "rgba(145, 158, 171, 0.24)" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ pl: 1.5 }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }} gutterBottom>
            1983, orders, $4220
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "12px" }}>
            13 Mar 2022 3:09 PM
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#1890FF", boxShadow: "none" }} />
          <TimelineConnector
            sx={{ width: "2.5px", bgcolor: "rgba(145, 158, 171, 0.24)" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ pl: 1.5 }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }} gutterBottom>
            1983, orders, $4220
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "12px" }}>
            13 Mar 2022 3:09 PM
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#FFC107", boxShadow: "none" }} />
          <TimelineConnector
            sx={{ width: "2.5px", bgcolor: "rgba(145, 158, 171, 0.24)" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ pl: 1.5 }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }} gutterBottom>
            1983, orders, $4220
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "12px" }}>
            13 Mar 2022 3:09 PM
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#FF4842", boxShadow: "none" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ pl: 1.5 }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }} gutterBottom>
            1983, orders, $4220
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "12px" }}>
            13 Mar 2022 3:09 PM
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
