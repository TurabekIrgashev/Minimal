import {
  AiTwotoneAppstore,
  AiOutlineLineChart,
  AiOutlineBank,
} from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiRadioCircle } from "react-icons/bi";
BiRadioCircle;
import { GiBookCover } from "react-icons/gi";
import {
  CalendarMonth,
  Chat,
  MailOutline,
  Note,
  NoteAltSharp,
  Person,
  ShoppingBasket,
  ViewKanban,
} from "@mui/icons-material";
export const installCountries = [
  {
    img: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_de.svg",
    country: "Germany",
    android: 49890,
    windows: 72345,
    mac: 72890,
  },
  {
    img: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_en.svg",
    country: "England",
    android: 49890,
    windows: 72345,
    mac: 72890,
  },
  {
    img: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_fr.svg",
    country: "France",
    android: 49890,
    windows: 72345,
    mac: 72890,
  },
  {
    img: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_kr.svg",
    country: "Korean",
    android: 49890,
    windows: 72345,
    mac: 72890,
  },
  {
    img: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_us.svg",
    country: "USA",
    android: 49890,
    windows: 72345,
    mac: 72890,
  },
];
export const topUsers = [
  {
    img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg",
    name: "Jayvion Simon",
    like: 16560,
    deg: 1,
  },
  {
    img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg",
    name: "Deja Brady",
    like: 13160,
    deg: 2,
  },
  {
    img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
    name: "Lucian Obrien",
    like: 10560,
    deg: 3,
  },
];
export const general = [
  {
    text: "App",
    icon: <AiTwotoneAppstore size={20} />,
    to: "/home",
  },
  {
    text: "E-commerce",
    icon: <RiMoneyDollarCircleLine size={20} />,
    to: "/E_Commerce",
  },
  {
    text: "Analytics",
    icon: <AiOutlineLineChart size={20} />,
    to: "/analytics",
  },
  {
    text: "Banking",
    icon: <AiOutlineBank size={20} />,
    to: "/home",
  },
  {
    text: "Booking",
    icon: <GiBookCover size={20} />,
    to: "/home",
  },
];
export const appSidebar = [
  {
    text: "Mail",
    icon: <MailOutline size={20} />,
    to: "/home",
  },
  {
    text: "Chat",
    icon: <Chat size={20} />,
    to: "/home",
  },
  {
    text: "Calendar",
    icon: <CalendarMonth size={20} />,
    to: "/home",
  },
  {
    text: "Kanban",
    icon: <ViewKanban size={20} />,
    to: "/home",
  },
];
export const menegment = [
  {
    text: "User",
    icon: <Person size={20} />,
    to: "/home",
    menu: [
      {
        title: "Profile",
        to: "/home",
      },
      {
        title: "Cards",
        to: "/home",
      },
      {
        title: "List",
        to: "/home",
      },
      {
        title: "Create",
        to: "/home",
      },
      {
        title: "Edit",
        to: "/home",
      },
      {
        title: "Account",
        to: "/home",
      },
    ],
  },
  {
    text: "E-commerce",
    icon: <ShoppingBasket size={20} />,
    to: "/shop",
    menu: [
      {
        title: "Shop",
        to: "/home",
      },
      {
        title: "Product",
        to: "/home",
      },
      {
        title: "List",
        to: "/home",
      },
      {
        title: "Create",
        to: "/home",
      },
      {
        title: "Edit",
        to: "/home",
      },
      {
        title: "Checkout",
        to: "/home",
      },
    ],
  },
  {
    text: "Invoice",
    icon: <Note size={20} />,
    to: "/home",
    menu: [
      {
        title: "List",
        to: "/home",
      },
      {
        title: "Details",
        to: "/home",
      },
      {
        title: "Create",
        to: "/home",
      },
      {
        title: "Edit",
        to: "/home",
      },
    ],
  },
  {
    text: "Blog",
    icon: <NoteAltSharp size={20} />,
    to: "/home",
    menu: [
      {
        title: "Posts",
        to: "blog/posts",
      },
      {
        title: "Post",
        to: "/home",
      },
      {
        title: "Create",
        to: "/home",
      },
    ],
  },
];

export const total = [
  {
    title: "Product Sold",
    renge: 2.6,
    total: 765,
    src: "/greenMiniChart.svg",
  },
  {
    src: "/greenMiniChart.svg",
    title: "Total Balance",
    renge: -0.1,
    total: 18765,
  },
  {
    src: "/orangeMiniChart.svg",
    title: "Sales Profit",
    renge: 0.6,
    total: 4876,
  },
];
