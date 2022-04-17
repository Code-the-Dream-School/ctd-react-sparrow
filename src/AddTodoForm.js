import React from 'react';


function AddTodoForm(props) {
    const [todoTitle, setTodoTitle] = React.useState('');
    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo = (event) => {
        event.preventDefault();
        props.onAddTodo(todoTitle);
        document.getElementById('todoForm').reset();
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