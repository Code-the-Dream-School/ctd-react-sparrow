import React from "react";
import { ReactComponent as IconList } from "./IconsSideBar/list.svg";

//SideBar items/lists

const sideBarData = [
  {
    title: "TodoList",
    path: "/",
    icon: <IconList />,
  },
  {
    title: "Personal",
    path: "/personal",
    icon: <IconList />,
  },
  {
    title: "Work",
    path: "/work",
    icon: <IconList />,
  },
  {
    title: "Chores",
    path: "/",
    icon: <IconList />,
  },
];

export default sideBarData;
