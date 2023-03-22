import React from "react";
import style from "./SideBar.module.css";
import { Link } from "react-router-dom";
import sideBarData from "./SideBarData";
import PropTypes from "prop-types";
import { Tooltip } from "antd";

const SideBar = ({ sideBar }) => {
  return (
    <nav className={sideBar ? style.nav_menu_active : style.nav_menu_done}>
      <ul className={style.nav_menu_items}>
        {sideBarData.map((item, index) => {
          return (
            <li key={index} className={style.items_sideBar}>
              <div className={style.container}>
                <div className={style.icon_sideBar}>{item.icon}</div>
                <Tooltip title={item.message}>
                  <Link to={item.path}>
                    <p>{item.title}</p>
                  </Link>
                </Tooltip>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

SideBar.propTypes = {
  sideBar: PropTypes.bool,
};

export default SideBar;
