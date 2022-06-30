import React from "react";
import TodoListItem from "./TodoListItem/TodoListItem";

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
      {todoList.map((todoList) => {
        return (
          <TodoListItem
            key={todoList.id}
            todoList={todoList}
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
