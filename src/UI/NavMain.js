import React from "react";
import style from "./NavMain.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ReactComponent as IconMenu } from "./SideVar/IconsSideBar/menu.svg";

const NavMain = ({ onSideBar }) => {
  return (
    <nav className={style.nav_container}>
      <ul className={style.nav_list}>
        <li className={style.menu}>
          <Link to="#">
            <IconMenu
              className={style.icon_menu}
              onClick={() => onSideBar(true)}
            />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/goal">Goals</Link>
        </li>

        <li>
          <Link to="/habit">Habits</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
