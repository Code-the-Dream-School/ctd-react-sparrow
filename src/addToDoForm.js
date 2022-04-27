import React from 'react';
import InputWithLabel from './InputWithLabel';


const AddToDoForm= ({onAddToDo}) => {
    const [toDoTitle, setToDoTitle]=React.useState('');

    const handleTitleChange =(event) => {
        const newToDoTitle = event.target.value;
        setToDoTitle(newToDoTitle);
    }

    const handleAddToDo=(event) => {
        event.preventDefault();
        onAddToDo({title: toDoTitle, id: Date.now()});
        setToDoTitle("");
    };
    return(
        <form onSubmit={handleAddToDo}>
           <InputWithLabel toDoTitle={toDoTitle} handleTitleChange={handleTitleChange}>Title</InputWithLabel>
            <button>Add</button>
        </form>
    )
}

export default AddToDoForm;