import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import style from "./TodoList.module.css"

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul className={style.ul}>
      {todoList.map((todo) => {
        return (
          <TodoListItem onRemoveTodo={onRemoveTodo} key={todo.id} todo={todo} />
        );
      })}
    </ul>
  );
}
export default TodoList;
