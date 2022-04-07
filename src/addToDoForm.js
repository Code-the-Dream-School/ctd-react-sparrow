import React from 'react';


const AddToDoForm = (props) => {
    const handleAddToDo = (event) => {
        event.preventDefault();
        const toDoTitle= event.target.title.value;
        console.log(toDoTitle);
        event.target.title.value= '';
        props.onAddToDo(toDoTitle);
    };
    return(
        <form onSubmit={handleAddToDo}>
            <label htmlFor="Title">Title</label> 
            <input id= "Search" type= "text" name= "title" />
            <button>Add</button>
        </form>
    )
}

export default AddToDoForm;