import React from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import style from "./AddTodoForm.module.css";
import { ReactComponent as AddIcon } from "../IconsComponents/addTask+.svg";
import PropTypes from "prop-types";
import { Tooltip } from "antd";

const AddTodoForm = ({ onAddTodo, tableName }) => {
  let [todoTitle, setTodoTitle] = React.useState("");

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
      onAddTodo(
        {
          fields: {
            Title: todoTitle,
            Description: todoTitle.Description,
          },
        },
        tableName
      );
      setTodoTitle("");
    }
  };

  return (
    <form onSubmit={handleAddTodo} className={style.label_container}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      ></InputWithLabel>
      <Tooltip title="Add Action">
        <button type="submit" className={style.add_button}>
          <AddIcon className={style.add_button} />
        </button>
      </Tooltip>
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
  tableName: PropTypes.string,
};

export default AddTodoForm;
