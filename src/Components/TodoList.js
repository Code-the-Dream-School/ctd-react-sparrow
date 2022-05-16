import React from "react";
import TodoListItem from "./TodoListItem";

//This renders the entire list
const TodoList = ({ todoList, onRemoveTodo }) => {
  console.log(todoList);
  return (
    <ol>
      {todoList.map(function (todo) {
        return (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        );
      })}
    </ol>
  );
};

export default TodoList;
