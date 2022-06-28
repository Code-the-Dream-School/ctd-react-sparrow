import React from 'react';
import ToDoListItem from './ToDoListItem';
import propTypes from 'prop-types';
function ToDoList({toDoList, onRemoveToDo}) {
    return (
        <ul>
            {toDoList.map((todo) => 
                (<ToDoListItem key={todo.id} todo= {todo} onRemoveToDo= {onRemoveToDo}/>
                ))
            }
        </ul>
    );

}

ToDoList.propTypes = {
    toDoList: propTypes.array.isRequired,
    onRemoveToDo: propTypes.func.isRequired
}

export default ToDoList;