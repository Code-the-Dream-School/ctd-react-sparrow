import React, { useState, useEffect } from "react";
import "./App.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function useSemiPersistentState() {
  let [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  let [todoList, setTodoList] = useSemiPersistentState();

  let addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  let removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList
        className="wrapper"
        onRemoveTodo={removeTodo}
        todoList={todoList}
      />
    </>
  );
}

export default App;
