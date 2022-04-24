import React from "react";
import MainTitle from "../../src/components/mainTitle";
import NavBtns from "../../src/components/NavBtns";
import { navBtnCalendar } from "../../src/data/calendar";
import Link from "next/link";
import { Box } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("en-US");
const localizer = momentLocalizer(moment);

const defaultMessages = {
  date: "Date",
  time: "Time",
  event: "Event",
  allDay: "AllDay",
  week: "Week",
  work_week: "Workweek",
  day: "Day",
  month: "Month",
  previous: "Previous",
  next: "Next",
  yesterday: "Yesterday",
  tomorrow: "Tomorrow",
  today: "Today",
  agenda: "Agenda",
  noEventsInRange: "No EventsInRange",
  showMore: function showMore(total) {
    return "+" + total + " mais";
  },
};

const myEventsList = [
  {
    title: "Test",
    start: new Date(2020, 5, 17, 13, 0, 0, 0),
    end: new Date(2020, 5, 17, 13, 30, 0, 0),
    desc: "Event Test",
  },
];

function Calendars() {
  return (
    <>
      <MainTitle text={"Calendar"} />
      <NavBtns data={navBtnCalendar} />
      <Box
        sx={{
          mt: 3,
          color: "rgb(0, 171, 85)",
          textDecoration: "underlined",
        }}
      >
        <Link href="/">https://fullcalendar.io/docs/react</Link>
      </Box>
      <Box sx={{ padding: "15px" }}>
        <Calendar
          messages={defaultMessages}
          formats={{
            agendaDateFormat: "DD/MM ddd",
            weekdayFormat: "dddd",
          }}
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, fontFamily: "Roboto" }}
        />
      </Box>
    </>
  );
}

export default Calendars;
