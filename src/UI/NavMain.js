import React from "react";
import style from "./NavMain.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as IconMenu } from "./SideVar/IconsSideBar/menu.svg";
import PropTypes from "prop-types";

const NavMain = ({ setSideBar, sideBar }) => {
  return (
    <nav className={style.nav_container}>
      <ul className={style.nav_list}>
        <li className={style.menu}>
          <Link to="#">
            <IconMenu
              className={style.icon_menu}
              onClick={() => {
                setSideBar(!sideBar);
              }}
            />
          </Link>
        </li>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/goal">Goals</Link>
        </li>

        <li>
          <Link to="/habit">Habits</Link>
        </li> */}
      </ul>
    </nav>
  );
};

NavMain.propTypes = {
  setSideBar: PropTypes.func, //This is supposted to be a boolean
  sideBar: PropTypes.bool,
};

export default NavMain;
