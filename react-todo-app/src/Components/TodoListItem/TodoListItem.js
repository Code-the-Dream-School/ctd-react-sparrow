import React from "react";
import style from "./TodoListItem.module.css";

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li className={style.listItem} id={todo.id}>
      {todo.fields.Title}

      <button
        className={style.button}
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
