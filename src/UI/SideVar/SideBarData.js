import React from "react";
import style from "./SideBar.module.css";
import { ReactComponent as IconTodo } from "./IconsSideBar/todo.svg";
import { ReactComponent as IconPersonal } from "./IconsSideBar/personal.svg";
import { ReactComponent as IconWork } from "./IconsSideBar/work.svg";
import { ReactComponent as IconList } from "./IconsSideBar/list.svg";

const sideBarData = [
  {
    title: "Todo",
    path: "/",
    icon: <IconList className="sideNav_todo" />,
    className: "nav-text",
  },
  {
    title: "Personal",
    path: "/personal",
    icon: <IconList className="sideNav_todo" />,
    className: "nav-text",
  },
  {
    title: "Work",
    path: "/work",
    icon: <IconList className="sideNav_todo" />,
    className: "nav-text",
  },
  {
    title: "Chores",
    path: "/",
    icon: <IconList className="sideNav_todo" />,
    className: "nav-text",
  },
];

export default sideBarData;
