import React, { useState } from "react";
import "./App.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

let todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Read React book" },
  { id: 3, title: "Watch React videos" },
];

function App() {
  let [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
