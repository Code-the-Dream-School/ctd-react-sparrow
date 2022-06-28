import React from 'react';
import propTypes from 'prop-types';
import style from './ToDoList.module.css';
function ToDoListItem({todo, onRemoveToDo}) {
  //unsure if I need to keep in id={todo.id} in li? works without it
  return (
    <>
      <li id= {todo.id} className= {style.ListItem}>
      {todo.fields.Title}
      <img src="https://cdn.discordapp.com/attachments/955553213988360212/989219882530922506/trashIcon.png" className= {style.RemoveButton} onClick={() => onRemoveToDo(todo.id)}/>
      </li>
    </>
  )
};

ToDoListItem.propTypes = {
  todo: propTypes.object.isRequired,
  onRemoveToDo: propTypes.func.isRequired
}
export default ToDoListItem;