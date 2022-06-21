import React from "react";
import TodoListItem from "./TodoListItem";

//This component renders the entire list
const TodoList = ({
  todoList,
  onRemoveTodo,
  onEditTodo,
  handleDescription,
}) => {
  return (
    <>
      {todoList.map((todoListItems) => {
        return (
          <TodoListItem
            key={todoListItems.id}
            todoListItems={todoListItems}
            onRemoveTodo={onRemoveTodo}
            onEditTodo={onEditTodo}
            handleDescription={handleDescription}
          />
        );
      })}
    </>
  );
};

export default TodoList;
