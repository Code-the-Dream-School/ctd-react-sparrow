import React from "react";
import style from "./SideBar.module.css";
import { Link, Router, Route } from "react-router-dom";
import { ReactComponent as IconMenu } from "./IconsSideBar/menu.svg";
import { ReactComponent as IconX } from "./IconsSideBar/x.svg";
import sideBarData from "./SideBarData";
import TodoList from "../../TodoContainer/Components/TodoList.js";

const SideBar = ({ sideBar, onSideBar, setCurrentLink }) => {
  return (
    <>
      {/*conditional rendering inside of class name based on a state */}
      <nav className={sideBar ? style.nav_menu_active : style.nav_menu}>
        <ul className={style.nav_menu_items}>
          <li className={style.navbar_toggle}>
            <Link to="#" className={style.menu_bars}>
              <IconX
                className={style.icon_x}
                onClick={() => onSideBar(false)}
              />
            </Link>
          </li>

          {sideBarData.map((item, index) => {
            return (
              <li key={index} className={style.items_sideBar}>
                <Link to={item.path}>
                  <div className={style.icon_sideBar}>{item.icon}</div>
                </Link>
                <Link to={item.path} onClick={() => setCurrentLink("Personal")}>
                  <p>{item.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
