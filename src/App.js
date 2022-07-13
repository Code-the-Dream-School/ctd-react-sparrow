import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styles from "./App.module.css"
import TodoContainer from "./TodoContainer/TodoContainer"
import NavMain from "./UI/NavMain/NavMain.js"
import SideBar from "./UI/SideVar/SideBar"

const App = () => {
  //sidebar state
  const [sideBar, setSideBar] = React.useState(false)

  //sidebar state for work and personal
  const [currentLink, setCurrentLink] = React.useState(false)
  console.log("current link", currentLink)

  //----------> Search Seaction (Navbar) <--------------//
  const [searchTerm, setSearchTerm] = React.useState("")
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

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
                    tableName={"TodoList"}
                    setCurrentLink={setCurrentLink}
                    searchTerm={searchTerm}
                  />
                }
              ></Route>
              <Route
                path="personal"
                element={
                  <TodoContainer
                    tableName={"Personal"}
                    searchTerm={searchTerm}
                  />
                }
              />
              <Route
                path="work"
                element={
                  <TodoContainer tableName={"Work"} searchTerm={searchTerm} />
                }
              />
              <Route
                path="chores"
                element={
                  <TodoContainer tableName={"Chores"} searchTerm={searchTerm} />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
