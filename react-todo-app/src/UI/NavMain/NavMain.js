import React from "react";
import style from "./NavMain.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as IconMenu } from "../SideBar/IconsSideBar/menu.svg";
import { ReactComponent as IconX } from "../SideBar/IconsSideBar/x.svg";
import PropTypes from "prop-types";
import Search from "../../TodoContainer/Components/Search/Search.js";
import { ReactComponent as IconHome } from "../SideBar/IconsSideBar/home.svg";
import { Tooltip } from "antd";

const NavMain = ({ setSideBar, sideBar, handleSearch }) => {
  //Hamburger state
  const [hamburgerMenu, setHamburgerMenu] = React.useState(true);
  //Sidebar and hamburger/x icons
  const handleIconMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
    setSideBar(!sideBar);
  };

  return (
    <nav className={style.nav_container}>
      <ul className={style.nav_list}>
        <li className={style.menu}>
          {hamburgerMenu ? (
            <Tooltip title="Sidebar Menu">
              <Link to="#">
                <IconMenu
                  className={style.icon_menu}
                  onClick={handleIconMenu}
                />
              </Link>
            </Tooltip>
          ) : (
            <Tooltip title="Close Menu">
              <Link to="#">
                <IconX className={style.icon_menu} onClick={handleIconMenu} />
              </Link>
            </Tooltip>
          )}
        </li>
        <li>
          <Tooltip title="Matrix Home">
            <Link to="/">
              <IconHome className={style.icon_menu} />
            </Link>
          </Tooltip>
        </li>
        <div className={style["search-container"]}>
          <li>
            <Search handleSearch={handleSearch} />
          </li>
        </div>
      </ul>
    </nav>
  );
};

NavMain.propTypes = {
  setSideBar: PropTypes.func,
  sideBar: PropTypes.bool,
  handleSearch: PropTypes.func,
};

export default NavMain;
