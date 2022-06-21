import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import TodoContainer from "./TodoContainer/TodoContainer";

const App = () => {
  return (
    <div className={styles.app_container}>
      <Router>
        <Routes>
          <Route index exact path="/" element={<TodoContainer />} />
          <Route path="/habit" element={<h1>Habits</h1>} />
          <Route path="/goal" element={<h1>Goals</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
