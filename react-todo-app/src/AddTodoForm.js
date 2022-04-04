import React from "react";

function AddTodoForm() {
  return (
    <form className="todo-form">
      <label htmlFor="todoTitle">Title: </label>
      <input id="todoTitle" type="text" />
      <button className="todo-button">Add</button>
    </form>
  );
}

export default AddTodoForm;
