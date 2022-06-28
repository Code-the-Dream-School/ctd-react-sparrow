import React from 'react';
import style from './ToDoList.module.css';
import trashIcon from './Images/trashIcon.png';
function ToDoListItem({todo, onRemoveToDo}) {
  //unsure if I need to keep in id={todo.id} in li? works without it
  return (
    <>
      <li id= {todo.id} className= {style.ListItem}>
      {todo.fields.Title}
      <button className= {style.RemoveButton} onClick={() => onRemoveToDo(todo.id)}/>
      </li>
    </>
  )
};

export default ToDoListItem;