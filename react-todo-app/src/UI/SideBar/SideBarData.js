import React from "react";
import { ReactComponent as IconMatrix } from "./IconsSideBar/matrix.svg";
import { ReactComponent as IconPointBreak } from "./IconsSideBar/pointbreak.svg";
import { ReactComponent as IconBucket } from "./IconsSideBar/bucket.svg";
import { ReactComponent as IconInception } from "./IconsSideBar/inception.svg";

//SideBar items/lists

const sideBarData = [
  {
    title: "The Matrix",
    path: "/",
    icon: <IconMatrix />,
    message: "Daily Hacks",
  },
  {
    title: "Point Break",
    path: "/pointbreak",
    icon: <IconPointBreak />,
    message: "Weekly Habits",
  },
  {
    title: "Bucket List",
    path: "/bucket",
    icon: <IconBucket />,
    message: "Annual Goals",
  },
  {
    title: "Inception",
    path: "/inception",
    icon: <IconInception />,
    message: "Lifetime Ideas",
  },
];

export default sideBarData;
