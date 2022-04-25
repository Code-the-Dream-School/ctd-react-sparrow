import React from 'react';
import TodoListItem from './TodoListItem';

//this file renders the todo list on the page

const TodoList = (props) => {
  const { todoList } = props; 
  return (
    < ul >
    {
      todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))
    }
      </ul >
    )
  }

export default TodoList;