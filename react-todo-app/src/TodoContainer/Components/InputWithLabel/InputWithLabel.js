import * as React from "react";
import style from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  return (
    <>
      <label htmlFor="todoTitle"></label>
      <input
        className={style.input_label}
        placeholder="Add a new action"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
};

export default InputWithLabel;
