import React from 'react';

//this file renders each item in the to do list

function TodoListItem({ todo }) {
    return (
        <li>{todo.title}</li>
    );
}

export default TodoListItem;