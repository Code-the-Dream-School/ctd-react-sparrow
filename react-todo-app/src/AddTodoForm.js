import React, { useState } from "react";

function AddTodoForm(props) {
  let [todoTitle, setTodoTitle] = useState("");

  let handleTitleChange = (e) => {
    let newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };
  let handleAddTodo = (e) => {
    e.preventDefault();
    let newTodo = e.target.title.value;
    props.onAddTodo(newTodo);

    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        id="todoTitle"
        value={todoTitle}
        name="title"
        type="text"
        onChange={handleTitleChange}
        placeholder="Add a Todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
