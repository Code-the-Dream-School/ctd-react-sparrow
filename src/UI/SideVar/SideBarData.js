import React from "react";
import style from "./SideBar.module.css";
import { ReactComponent as IconTodo } from "./IconsSideBar/todo.svg";
import { ReactComponent as IconPersonal } from "./IconsSideBar/personal.svg";
import { ReactComponent as IconWork } from "./IconsSideBar/work.svg";
import TodoList from "../../TodoContainer/Components/TodoList.js";

const sideBarData = [
  {
    title: "Todo",
    path: "/",
    icon: <IconTodo className="sideNav_todo" />,
    className: "nav-text",
  },
  {
    title: "Personal",
    path: "/personal",
    icon: <IconPersonal className="sideNav_todo" />,
    className: "nav-text",
  },
  {
    title: "Work",
    path: "/work",
    icon: <IconWork className="sideNav_todo" />,
    className: "nav-text",
  },
  {
    title: "Chores",
    path: "/chores",
    icon: <IconWork className="sideNav_todo" />,
    className: "nav-text",
  },
];

export default sideBarData;
