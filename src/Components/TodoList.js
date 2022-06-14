import React from "react";
import TodoListItem from "./TodoListItem";

//This component renders the entire list
const TodoList = ({ todoList, onRemoveTodo, onEditTodo }) => {
  console.log(todoList);
  return (
    <>
      {todoList.map((todo) => {
        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onEditTodo={onEditTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
