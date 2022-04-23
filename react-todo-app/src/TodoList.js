import React from "react";

import TodoListItem from "./TodoListItem";

let TodoList = (props) => {
  let todoList = props.todoList;
  return (
    <ul>
      {todoList.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
