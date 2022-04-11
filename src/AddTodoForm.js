import React from "react";

const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        event.target.reset();
        props.onAddTodo(todoTitle);
    };
    return(
        <form onSubmit = {handleAddTodo}>
            <label htmlFor = "todoTitle">Tittle </label>
            <input id = "todoTitle" name = "title"/>
            <button type = "submit">Submit</button>  
        </form>
        );
    }

    export default AddTodoForm;