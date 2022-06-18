import React from 'react';
import style from './ToDoList.module.css';

function ToDoListItem({todo, onRemoveToDo}) {
   //unsure if I need to keep in id={todo.id} in li? works without it
 return (
    <>
      <li id= {todo.id} className= {style.ListItem}>
      {todo.fields.Title}
      <button className= {style.RemoveButton} onClick={() => onRemoveToDo(todo.id)}/>
      </li>
      {console.log(todo)}
    </>
 )
};

export default ToDoListItem;