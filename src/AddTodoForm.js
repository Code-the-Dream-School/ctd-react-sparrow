import React from 'react';

function AddTodoForm(props) {
    let todoTitle = '';
    const handleAddTodo = (event) => {
        event.preventDefault();
        todoTitle = event.target.title.value; 
        console.log(todoTitle);
        props.onAddTodo(todoTitle);
        document.getElementById('todoForm').reset();
    };
    return (
        <form id="todoForm" onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input name = "title" type = "text" id="todoTitle"></input>
            <button type ="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;