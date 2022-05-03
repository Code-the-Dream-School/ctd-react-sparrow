import React from 'react';
import ToDoListItem from './ToDoListItem';

function ToDoList({toDoList, onRemoveToDo}) {
    return (
        <ul>
            {toDoList.map(todo=> 
                (<ToDoListItem key={todo.id} todo= {todo} onRemoveToDo= {onRemoveToDo}/>
                ))}
        </ul>
    );

}
export default ToDoList;