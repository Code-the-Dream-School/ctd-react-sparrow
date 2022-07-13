import React from "react"
import style from "./SideBar.module.css"
import { Link } from "react-router-dom"
import sideBarData from "./SideBarData"
import PropTypes from "prop-types"

const SideBar = ({ sideBar, setCurrentLink, tableName, currentLink }) => {
  // sideBar --> state: manage the transition
  // setCurrent --> link: triggers the data from airtable
  console.log("currrent link", currentLink)
  const handleCurrentLink = () => {
    setCurrentLink(!currentLink)
  }

  return (
    <>
      <nav className={sideBar ? style.nav_menu_active : style.nav_menu_done}>
        <ul className={style.nav_menu_items}>
          {sideBarData.map((item, index) => {
            return (
              <li key={index} className={style.items_sideBar}>
                <Link to={item.path} onClick={handleCurrentLink}>
                  <div className={style.icon_sideBar}>{item.icon}</div>
                  <p>{item.title}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

SideBar.prototypes = {
  sideBar: PropTypes.bool,
  setCurrentLink: PropTypes.func, // This is supposted to be a string
}

export default SideBar
