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
  },
  {
    title: "Point Break",
    path: "/pointbreak",
    icon: <IconPointBreak />,
  },
  {
    title: "Bucket List",
    path: "/bucket",
    icon: <IconBucket />,
  },
  {
    title: "Inception",
    path: "/inception",
    icon: <IconInception />,
  },
];

export default sideBarData;
