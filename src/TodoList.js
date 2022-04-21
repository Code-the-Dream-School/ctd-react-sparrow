import React from 'react';
import TodoListItem from './TodoListItem';

/*
const todoList = [
    {
      id: 1,
      title: 'Setup the IDE'
    },
    {
      id: 2,
      title: 'Create a new folder'
    },
    {
      id: 3,
      title:'Initiate the new React App'
    },
    {
      id: 4,
      title: 'Start working'
    },
    {
      id: 5,
      title: 'Have fun!'
    }
];
*/

const TodoList = (props) => {
  console.log(`these are the props from TodoList => ${props}`)
    return (
        <ul>
        {props.todoList.map(function (todo) {
        return (
          <TodoListItem key={todo.id} todo={todo}/>
        )
        })}
       </ul>
    );
};







export default TodoList;