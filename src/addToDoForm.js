import React from 'react';


const AddToDoForm = () => {
    const handleAddToDo = (event) => {
        event.preventDefault();
        console.log(event);
    };
    return(
        <form>
            <label htmlFor="Title">Title</label> <input id= "Search"></input><button>Add</button>
        </form>
    )
}

export default AddToDoForm;