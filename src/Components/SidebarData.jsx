import React from "react";


import { CiLogin } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { PiArticle } from "react-icons/pi";



export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Articles",
    path: "/articles",
    icon: <PiArticle />,
    cName: "nav-text",
  },
  {
    title: "Topics",
    path: "/topics",
    icon: <BiCategory />,
    cName: "nav-text",
  },
  {
    title: "Log in",
    path: "/LogIn",
    icon: <CiLogin />,
    cName: "nav-text",
  },
];
