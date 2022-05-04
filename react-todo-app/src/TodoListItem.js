import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li className="li" id={todo.id}>
      {todo.title}

      <button
        className="rm"
        onClick={() => {
          onRemoveTodo(todo.id);
        }}
        type="button"
      >
        Remove
      </button>
    </li>
  );
}

export default TodoListItem;
