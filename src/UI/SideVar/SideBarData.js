import React from "react";
import style from "./SideVar.module.css";
import { ReactComponent as IconTodo } from "./IconsSideVar/todo.svg";
import { ReactComponent as IconPersonal } from "./IconsSideVar/personal.svg";
import { ReactComponent as IconWork } from "./IconsSideVar/work.svg";

const sideBarData = [
  {
    title: "Todo",
    path: "/",
    icon: <IconTodo className="sideNav_todo" />,
  },
  {
    title: "Personal",
    path: "/personal",
    icon: <IconPersonal className="sideNav_todo" />,
  },
  {
    title: "Work",
    path: "/work",
    icon: <IconWork className="sideNav_todo" />,
  },
];

export default sideBarData;
