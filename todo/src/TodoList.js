import React from "react";

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
            {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    )
}

export default TodoList;