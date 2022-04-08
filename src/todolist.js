import React from 'react';
import ToDoListItem from './ToDoListItem';

function ToDoList({toDoList}) {
    return (
        <ul>
            {toDoList.map(todo => 
                (<ToDoListItem key={todo.id} todo={todo}/>
                ))}
        </ul>
    );

}
export default ToDoList;