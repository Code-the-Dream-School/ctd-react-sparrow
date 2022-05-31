import React from "react";
import InputWithLabel from "./InputWithLabel";

//This component renders the form (input field)
const AddTodoForm = ({ onAddTodo, todoList }) => {
  console.log(`This is the prop from the App component ${onAddTodo}`);

  //This state controls the input field (it makes this component a controlled component)
  let [todoTitle, setTodoTitle] = React.useState("");

  //This event retrieves the information the user enters in the input field
  //and update the state in the now controlled component.
  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };

  //This is a handler function (event listener) that gets trigger once the user clicks on the submit button
  //gets the updated state and send it back to the App component with a new id
  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log(`input field => ${todoTitle}`);
    if (todoTitle.trim().length === 0) {
      alert("Input field is empty");
    } else {
      //The prop "onAddTodo" is the callback function from the parent component (App) with new state
      onAddTodo({
        fields: {
          Title: todoTitle,
          id: Date.now(),
        },
      });
      setTodoTitle("");
    }
  };

  return (
    <>
      <h1>New Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Title
        </InputWithLabel>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddTodoForm;
