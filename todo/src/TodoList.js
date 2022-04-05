import React from "react";
import TodoListItem from "./TodoListItem";
  
const TodoList = ({todoList}) => {
    return (
        <ul>
            {todoList.map(todo => (
                <TodoListItem todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList;