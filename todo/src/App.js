import React from "react";
import AddTodoForm from "./AddTodoForm";
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
