import React from 'react';
import InputWithLabel from './InputWithLabel';
import style from './ToDoList.module.css';

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
           <InputWithLabel className={style.InputBar} toDoTitle={toDoTitle} handleTitleChange={handleTitleChange}>Title</InputWithLabel>
            <button className={style.AddToDoButton}>Add</button>
        </form>
    )
}

export default AddToDoForm;