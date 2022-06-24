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
  //Item description section
  // const [toggleDescription, setToggleDescription] = React.useState(false);

  // const [itemDescription, setItemDescription] = React.useState("");

  // const handleDescription = (id) => {
  //   setToggleDescription(!toggleDescription);
  //   setItemDescription(id);
  // };

  //sidebar state
  const [sideBar, setSideBar] = React.useState(false);
  console.log(sideBar);

  //sidebar state for work and personal
  const [currentLink, setCurrentLink] = React.useState();

  return (
    <div className={styles.app_container}>
      <Router>
        <div className={styles.todoCont_split_box}>
          <div className={styles.todoCont_MainNav}>
            <NavMain onSideBar={setSideBar} />
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
              <Route path="/" element={<TodoContainer />}>
                <Route path="/habit" element={<h1>Habits</h1>} />
                <Route
                  path="/goal"
                  element={<h1>This is what I'm rendering</h1>}
                />
              </Route>
              <Route
                path="personal"
                element={<TodoContainer id={"tblvT4z7QLKoCc04L"} />}
              />
              <Route path="work" element={<TodoContainer />} />
            </Routes>
          </div>
          {/* <div className={styles.todoCon_right_pane_description}>
            {toggleDescription && (
              <ItemDescription
                todoList={todoList}
                itemDescription={itemDescription}
              />
            )}
          </div> */}
        </div>
      </Router>
    </div>
  );
};

export default App;
