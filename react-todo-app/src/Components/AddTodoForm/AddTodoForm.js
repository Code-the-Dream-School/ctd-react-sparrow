import React, { useState } from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import style from "./AddTodoForm.module.css";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log(`input field => ${todoTitle}`);
    if (todoTitle.trim().length === 0) {
      alert("Input field is empty");
    } else {
      onAddTodo({
        id: Date.now(),

        fields: {
          Title: todoTitle,
        },
      });
      setTodoTitle("");
    }
  };

  return (
    <form className={style.formContainer} onSubmit={handleAddTodo}>
      <div className={style.inputContainer}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
          className={style.inputWithLabel}
          labelStyle={{ fontSize: "20px" }}
          style={{ fontSize: "16px", marginRight: "8px" }}
        >
          Title:&nbsp;
        </InputWithLabel>
        <button type="submit" className={style.addButton}
          style={{ marginLeft: "2px" }}>
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
