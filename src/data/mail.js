import {
  ArrowBackIosTwoTone,
  Delete,
  DensityMedium,
  Drafts,
  Error,
  Forum,
  ImportantDevices,
  Inbox,
  LabelImportantSharp,
  Mail,
  MarkChatRead,
  Menu,
  More,
  Refresh,
  Send,
  Share,
  SocialDistance,
  Star,
  StarHalfTwoTone,
  Start,
  StartOutlined,
  TramSharp,
} from "@mui/icons-material";
import { Checkbox } from "@mui/material";

export const navBtnMail = [
  {
    title: "Dashboard",
    disabled: false,
    circle: false,
  },
  {
    title: "Mail",
    disabled: true,
    circle: true,
  },
];
export const listsMail = [
  {
    text: "All Mail",
    icon: <Mail />,
    to: "/app/mail",
  },
  {
    text: "Inbox",
    icon: <Inbox />,
    to: "/app/mail",
  },
  {
    text: "Sent",
    icon: <Send />,
    to: "/app/mail",
  },
  {
    text: "Drafts",
    icon: <Drafts />,
    to: "/app/mail",
  },
  {
    text: "Trash",
    icon: <Delete />,
    to: "/app/mail",
  },
  {
    text: "Spam",
    icon: <Error />,
    to: "/app/mail",
  },
  {
    text: "Important",
    icon: <LabelImportantSharp />,
    to: "/app/mail",
  },
  {
    text: "Statrted",
    icon: <Star />,
    to: "/app/mail",
  },
  {
    text: "Social",
    icon: <Share />,
    to: "/app/mail",
  },
  {
    text: "Promotions",
    icon: <MarkChatRead />,
    to: "/app/mail",
  },
  {
    text: "Forums",
    icon: <Forum />,
    to: "/app/mail",
  },
];
export const mailHeaderIcons = [
  {
    icon: <Checkbox />,
  },
  {
    icon: <Refresh />,
    prover: "Refresh",
  },
  {
    icon: <DensityMedium />,
    prover: "Dense",
  },
  {
    icon: <More />,
    prover: "More",
  },
];
