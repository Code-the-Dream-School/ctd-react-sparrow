import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

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

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
