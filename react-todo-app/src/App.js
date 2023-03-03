import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import TodoContainer from "./TodoContainer/TodoContainer";
import NavMain from "./UI/NavMain/NavMain.js";
import SideBar from "./UI/SideBar/SideBar";

const App = () => {
  //sidebar state
  const [sideBar, setSideBar] = React.useState(false);

  //sidebar state to activate routing links
  const [currentLink, setCurrentLink] = React.useState(false);

  //----------> Search Section (Navbar) <--------------//
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearch = (e) => {
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
        <div className={styles.todoCont_left_pane_sideBar}>
          <SideBar
            sideBar={sideBar}
            onSideBar={setSideBar}
            setCurrentLink={setCurrentLink}
            currentLink={currentLink}
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
                    tableName={"The Matrix"}
                    setCurrentLink={setCurrentLink}
                    searchTerm={searchTerm}
                  />
                }
              ></Route>
              <Route
                path="pointbreak"
                element={
                  <TodoContainer
                    tableName={"Point Break"}
                    searchTerm={searchTerm}
                  />
                }
              />
              <Route
                path="bucket"
                element={
                  <TodoContainer
                    tableName={"The Bucket List"}
                    searchTerm={searchTerm}
                  />
                }
              />
              <Route
                path="inception"
                element={
                  <TodoContainer
                    tableName={"Inception"}
                    searchTerm={searchTerm}
                  />
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
