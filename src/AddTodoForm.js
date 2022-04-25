import React from 'react';

// this file renders the form where each todo item is entered to create the todolist

function AddTodoForm(props) {
    let [todoTitle, setTodoTitle] = React.useState(''); //this item controls the state of the input field on the form
    const { onAddTodo } = props;
    //this function is an event handler for when the value is changed in the input field
    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    //this function is an event handler for the submit 
    const handleAddTodo = (event) => {
        //prevents the page from reloading
        event.preventDefault();

        //
        onAddTodo( {
            title: todoTitle,
            id: Date.now()
        });
        setTodoTitle('');
    }
    return (
        <form id="todoForm" onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input 
            name = "title" 
            type = "text" 
            id="todoTitle" 
            value={todoTitle} 
            onChange={handleTitleChange}>
            </input>
            <button type ="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;