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
    to: "/banking",
  },
];
export const appSidebar = [
  {
    text: "Mail",
    icon: <MailOutline size={20} />,
    to: "/app/mail",
  },
  {
    text: "Calendar",
    icon: <CalendarMonth size={20} />,
    to: "/app/calendar",
  },
  {
    text: "Kanban",
    icon: <ViewKanban size={20} />,
    to: "/app/kanban",
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
        to: "/users/profile",
      },
    ],
  },
  {
    text: "E-commerce",
    icon: <ShoppingBasket size={20} />,
    to: "/home",
    menu: [
      {
        title: "Shop",
        to: "/commerce/Shop",
      },
      {
        title: "Product",
        to: "/commerce/Product",
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
        to: "/invoice/list",
      },
      {
        title: "Details",
        to: "/invoice/details",
      },
      {
        title: "Create",
        to: "/invoice/create",
      },
      {
        title: "Edit",
        to: "/invoice/edit",
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
        to: "/blog/posts",
      },
      {
        title: "Post",
        to: "/blog/post",
      },
      {
        title: "Create",
        to: "/blog/create",
      },
    ],
  },
];

export const total = [
  {
    title: "Total Active Users",
    renge: 2.6,
    total: 18765,
    src: "/greenMiniChart.svg",
  },
  {
    src: "/greenMiniChart.svg",
    title: "Total Active Users",
    renge: 2.6,
    total: 14895,
  },
  {
    src: "/orangeMiniChart.svg",
    title: "Total Active Users",
    renge: -2.6,
    total: 765,
  },
];
