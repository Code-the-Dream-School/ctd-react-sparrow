import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });

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
