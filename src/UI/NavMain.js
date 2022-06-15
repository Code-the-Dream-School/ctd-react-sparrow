import React from "react";
import style from "./NavMain.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NavMain = () => {
  //Links to Hobbies and Personal goals
  return (
    <nav className={style.nav_container}>
      <ul className={style.nav_list}>
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
