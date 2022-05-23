import React from 'react';

//this file renders each item in the to do list

function TodoListItem({ todo, onRemoveTodo }) {
    return (
        <li>{todo.fields.Title} <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button></li>
    );
}

export default TodoListItem;