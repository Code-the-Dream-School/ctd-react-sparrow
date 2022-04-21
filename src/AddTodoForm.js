import React from 'react';


//This component renders the form (input field)
const AddTodoForm = ({onAddTodo}) => {

    //This state controls the input field (it makes this component a controlled component)
    let [todoTitle, setTodoTitle] = React.useState('');

    //This event handle controls the information the user enters in the input fied
    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
        console.log(`input field as well but with controlled component ${setTodoTitle(newTodoTitle)}`)
    }

    //This a handler function (event listener) that gets trigger once the user clicks on the submit button 
    const handleAddTodo = (e) => {
        e.preventDefault();
        //const todoTitle = event.target.title.value;
        console.log(`input field => ${todoTitle}`);
        //the prop "onAddTodo" is the callback function from the parent component (App) with new state 
        onAddTodo(todoTitle);
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