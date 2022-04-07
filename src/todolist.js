import React from 'react';
import ToDoListItem from './ToDoListItem';

const toDoListArray = [
    {
      id: 0,
      title: "Sweep the floors"
    }, 
    {
      id: 1,
      title: "Read a book"
    }, 
    {
      id: 2,
      title: "Unload the dishwasher"
    },
    {
      id: 3,
      title: "Walk the dog"
    }
];

function ToDoList({toDoList}) {
    return (
        <ul>
            {toDoList.map((todo) => 
                <ToDoListItem key={todo.id} todo={todo}/>)}
        </ul>
    );

}
export default ToDoList;