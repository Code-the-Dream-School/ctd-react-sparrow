import React from 'react';

//This component renders each element of the list 
const TodoListItem = ({todo}) => {
    return (
        <li>
        {todo.title}
        </li>
    
    );
};


export default TodoListItem;