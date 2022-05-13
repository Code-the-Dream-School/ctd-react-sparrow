import React from 'react';
import TodoListItem from './TodoListItem';

//this file renders the todo list on the page

const TodoList = ({ todoList, onRemoveTodo }) => { 
  return (
    < ul >
    {
      todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/>
      ))
    }
      </ul >
    )
  }

export default TodoList;