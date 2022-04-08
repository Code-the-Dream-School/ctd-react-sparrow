import React from 'react';


const AddToDoForm= ({onAddToDo}) => {
    const [toDoTitle, setToDoTitle]=React.useState('');

    const handleTitleChange =(event) => {
        const newToDoTitle= event.target.value;
        setToDoTitle(newToDoTitle);
    }

    const handleAddToDo=(event) => {
        event.preventDefault();
        onAddToDo({title: toDoTitle, id: Date.now()});
        setToDoTitle("");
    };
    return(
        <form onSubmit={handleAddToDo}>
            <label htmlFor="toDoTitle">Title</label> 
            <input id="toDoTitle" type="text" name="title" value={toDoTitle} onChange={handleTitleChange}/>
            <button>Add</button>
        </form>
    )
}

export default AddToDoForm;