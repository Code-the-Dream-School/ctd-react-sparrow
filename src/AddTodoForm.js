import React from 'react';


//This component renders the form (imput field)
const AddTodoForm = ({onAddTodo}) => {
    let [todoTitle, setTodoTitle] = React.useState('');

    //
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
        console.log(`input field as well but with controlled component ${newTodoTitle}`)
    }

    //This a handler function (event listener) that gets trigger once the user clicks on the submit button 
    const handleAddTodo = (event) => {
        event.preventDefault();
        //const todoTitle = event.target.title.value;
        console.log(`input field => ${todoTitle}`);
        //the prop "onAddTodo" is the callback function from the parent component (App) with new state 
        onAddTodo(
            {
                title: todoTitle,
                id: Date.now()
            }
        );
        //event.target.reset();
        setTodoTitle(''); 
    };
  
    return(
        <form onSubmit={handleAddTodo} >
            <label htmlFor="todoTitle">Title</label>
            <input 
            id="todoTitle" 
            name="title" 
            value={todoTitle}
            onChange={handleTitleChange}
            />
            <button  type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;