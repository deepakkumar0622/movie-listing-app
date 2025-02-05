import { BiSolidMoviePlay } from "react-icons/bi";

import { MdHomeFilled } from "react-icons/md";

import { MdOutlineLiveTv } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

export const nav = [
  {
    label: "Home",
    href: "",
    icon: <MdHomeFilled />,
  },
  {
    label: "TV Shows",
    href: "tv",
    icon: <MdOutlineLiveTv />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiSolidMoviePlay />,
  },
];

export const mobilenav = [
  ...nav,
  {
    label: "Search",
    href: "search",
    icon: <IoSearchSharp />,
  },
];
