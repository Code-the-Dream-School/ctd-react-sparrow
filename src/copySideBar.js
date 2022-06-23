import React from "react";
import style from "./SideBar.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as IconMenu } from "./IconsSideBar/menu.svg";
import { ReactComponent as IconX } from "./IconsSideBar/x.svg";
import sideBarData from "./SideBarData";

const SideBar = () => {
  //This migth be in my mainNav
  // false meaning is not showing
  const [sideBar, setSideBar] = React.useState(false);

  //state handeler
  const handlerShowSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <div className={style.sideBar}>
        {/* Also this is what he called navBar, and this is the top bar 
        that would be my MainBar */}
        {/* I thinks this link would be linked to home */}
        <Link to="#" className={style.menu_bars}>
          <IconMenu className={style.icon_menu} onClick={handlerShowSidebar} />
        </Link>
      </div>

      {/*conditional rendering inside of class name based on a statement
      This logic would be in my Main Bar */}
      <nav className={sideBar ? style.nav_menu_active : style.nav_menu}>
        <ul>
          {/* <ul className={style.nav_menu_items}> */}
          <li className={style.nav_toggle}>
            <Link to="#" className={style.menu_bars}>
              <IconX className={style.icon_x} />
            </Link>
          </li>

          {sideBarData.map((item, index) => {
            return (
              // This would the class from the data -> items_sideBar

              <li key={index} className={style.items_sideBar}>
                <Link to={item.path}>
                  <div className={style.icon_sideBar}>{item.icon}</div>
                </Link>
                <Link to={item.path}>
                  <p>{item.title}</p>
                </Link>
              </li>
            );
          })}
          {/* </ul> */}
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
