import React from "react";

//This component renders each element of the list, and the remove button
//
const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li>
      {todo.fields.Title}
      <button
        onClick={() => {
          onRemoveTodo(todo.id);
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
