import React from 'react';

function ToDoListItem({todo, onRemoveToDo}) {
   //unsure if I need to keep in id={todo.id} in li? works without it
 return (
    <>
      <li id={todo.id}>
      {todo.title}
      <button onClick={() => onRemoveToDo(todo.id)}>Remove</button>
      </li>
      {console.log(todo)}
    </>
 )
};

export default ToDoListItem;