import React from 'react';
import InputWithLabel from './InputWithLabel';
import style from './ToDoList.module.css';
import propTypes from 'prop-types';
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

AddToDoForm.propTypes = {
    onAddToDo: propTypes.func.isRequired
}

export default AddToDoForm;