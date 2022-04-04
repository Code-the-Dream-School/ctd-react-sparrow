import React from "react";


export default function AddTodoForm(props) {

    const handleAddTodo = (event) => {
        event.preventDefault()
        console.log(event)
        const todoTitle = event.target.title.value
        console.log(todoTitle)
        event.target.reset();
        props.onAddTodo(todoTitle)
    }  
    return (
        <form onSubmit={handleAddTodo} > 
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" type="text" name="title"/>
            <button type="submit">Add</button>
        </form> 
    )
}

