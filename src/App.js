import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import TodoContainer from "./TodoContainer/TodoContainer";
import NavMain from "./UI/NavMain";
import SideBar from "./UI/SideVar/SideBar";
// import ItemDescription from "./Components/ItemDescription";
import Personal from "./UI/Pages/Personal.js";
import Work from "./UI/Pages/Work.js";

const App = () => {
  //sidebar state
  const [sideBar, setSideBar] = React.useState(false);
  console.log(sideBar);

  //sidebar state for work and personal
  const [currentLink, setCurrentLink] = React.useState("Work");

  return (
    <div className={styles.app_container}>
      <Router>
        <div className={styles.todoCont_split_box}>
          <div className={styles.todoCont_MainNav}>
            <NavMain setSideBar={setSideBar} sideBar={sideBar} />
          </div>
          <div className={styles.todoCont_lelf_pane_sideBar}>
            <SideBar
              sideBar={sideBar}
              onSideBar={setSideBar}
              onCurrentLink={setCurrentLink}
            />
          </div>
          <div className={styles.todoCon_middle_pane_todoList}>
            <Routes>
              <Route
                path="/"
                element={
                  <TodoContainer
                    tableId={"Default"}
                    setCurrentLink={setCurrentLink}
                  />
                }
              >
                <Route path="/habit" element={<h1>Habits</h1>} />
                <Route
                  path="/goal"
                  element={<h1>This is what I'm rendering</h1>}
                />
              </Route>
              <Route
                path="personal"
                element={<TodoContainer tableId={"Personal"} />}
              />
              <Route path="work" element={<TodoContainer tableId={"Work"} />} />
              <Route
                path="chores"
                element={<TodoContainer tableId={"Chores"} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
