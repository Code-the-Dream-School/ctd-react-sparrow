import React from "react";
import TodoListItem from "./TodoListItem";

//This component renders the entire list
const TodoList = ({ todoList, onRemoveTodo, onEditTodo }) => {
  return (
    <>
      {todoList.map((todoListItems) => {
        return (
          <TodoListItem
            key={todoListItems.id}
            todoListItems={todoListItems}
            onRemoveTodo={onRemoveTodo}
            onEditTodo={onEditTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
