import React from 'react';
import TodoListItem from './TodoListItem';

//This renders the entire list 
const TodoList = ({todoList}) => {
  console.log(todoList)
    return (
        <ul>
        {todoList.map(function (todo) {
        return (
          <TodoListItem key={todo.id} todo={todo}/>
        )
        })}
       </ul>
    );
};







export default TodoList;