import React from "react";
import style from "./SideVar.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as IconMenu } from "./IconsSideVar/menu.svg";
import { ReactComponent as IconX } from "./IconsSideVar/x.svg";
import sideBarData from "./SideBarData";

const SideVar = () => {
  const [sideBar, setSideBar] = React.useState(false);

  const handlerShowSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <div className={style.sideBar}>
        <Link to="#" className={style.menu_bars} onClick={handlerShowSidebar}>
          <IconMenu className={style.icon_menu} />
        </Link>
      </div>
      {/*conditional rendering inside of class name based on a statement */}
      <nav className={sideBar ? style.nav_menu_active : style.nav_menu}>
        <ul className={style.nav_menu_items}>
          <li className={style.nav_toggle}>
            <Link to="#" className={style.menu_list_type}>
              <IconX className={style.icon_x} />
            </Link>
          </li>
          {sideBarData.map((item, index) => {
            return (
              <li key={index} className={style.icon_sideBar}>
                <Link to={item.path}>
                  <div>{item.icon}</div>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default SideVar;
