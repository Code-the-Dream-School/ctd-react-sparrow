import React from "react";
import TodoListItem from "./TodoListItem";

//This component renders the entire list
const TodoList = ({
  todoList,
  onRemoveTodo,
  onEditTodo,
  handleDescription,
  tableId,
}) => {
  console.log("tableId prop", tableId);
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
            tableId={tableId}
          />
        );
      })}
    </>
  );
};

export default TodoList;
