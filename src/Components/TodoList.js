import React from "react";
import TodoListItem from "./TodoListItem";

//This renders the entire list
const TodoList = ({ todoList, onRemoveTodo }) => {
  console.log(todoList);
  return (
    <>
      {todoList.map((todo) => {
        return (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        );
      })}
    </>
  );
};

export default TodoList;
