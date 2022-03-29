import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [{
    id: 1,
    title: 'Learn React',
  }, {
    id: 2,
    title: 'Learn Redux',
  }, {
    id: 3,
    title: 'Learn React Router',
  }];
  
const TodoList = () => {
    return (
        <ul>
            {todoList.map(todo => (
                <TodoListItem todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList;