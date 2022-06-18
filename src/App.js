import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import "./index.css";
import TodoContainer from "./TodoContainer/TodoContainer";

const App = () => {
  return (
    <div className={styles.app_container}>
      <TodoContainer></TodoContainer>
    </div>
  );
};

export default App;
