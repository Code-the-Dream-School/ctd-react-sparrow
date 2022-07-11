import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import TodoContainer from "./TodoContainer/TodoContainer";
import NavMain from "./UI/NavMain/NavMain.js";
import SideBar from "./UI/SideVar/SideBar";

const App = () => {
  //sidebar state
  const [sideBar, setSideBar] = React.useState(false);
  console.log(sideBar);

  //sidebar state for work and personal
  const [currentLink, setCurrentLink] = React.useState("work");
  console.log(currentLink);

  //----------> Search Seaction (Navbar) <--------------//
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearch = (e) => {
    console.log("SEARCH NAV", e);
    setSearchTerm(e.target.value);
  };

  return (
    <Router>
      <div className={styles.todoCont_split_box}>
        <div className={styles.todoCont_MainNav}>
          <NavMain
            setSideBar={setSideBar}
            sideBar={sideBar}
            handleSearch={handleSearch}
          />
        </div>
        <div className={styles.todoCont_lelf_pane_sideBar}>
          <SideBar
            sideBar={sideBar}
            onSideBar={setSideBar}
            onCurrentLink={setCurrentLink}
          />
        </div>
        <div className={sideBar ? styles["todo_container"] : styles["active"]}>
          <div className={styles.todoCon_middle_pane_todoList}>
            <Routes>
              <Route
                path="/"
                element={
                  <TodoContainer
                    sideBar={sideBar}
                    tableId={"TodoList"}
                    // setCurrentLink={setCurrentLink}
                    searchTerm={searchTerm}
                  />
                }
              ></Route>
              <Route
                path="personal"
                element={
                  <TodoContainer tableId={"Personal"} searchTerm={searchTerm} />
                }
              />
              <Route
                path="work"
                element={
                  <TodoContainer tableId={"Work"} searchTerm={searchTerm} />
                }
              />
              <Route
                path="chores"
                element={
                  <TodoContainer tableId={"Chores"} searchTerm={searchTerm} />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
