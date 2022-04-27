import React from 'react';

function ToDoListItem({todo, onRemoveToDo}) {
 return (
    <>
      <li>
      {todo.title}
      <button onClick={() => onRemoveToDo(todo.id)}>Remove</button>
      </li>
      
    </>
 )
};

export default ToDoListItem;