import React from "react";

const TodoListItem = (props) => {
   return (
    <li>
      <p>{props.todo.title}</p>
      <p> 
        <a href={props.todo.url}> {props.todo.link}</a> 
      </p>
    </li>
   );
  }

  export default TodoListItem