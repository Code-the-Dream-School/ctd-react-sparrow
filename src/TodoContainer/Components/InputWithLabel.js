import * as React from "react";
import style from "./InputWithLabel.module.css";

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  //useRef and useEffect hook keep the focus on the input field
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle"></label>
      <input
        className={style.input_label}
        placeholder="Add a new task"
        id="todoTitle"
        name="title"
        ref={inputRef}
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
};

export default InputWithLabel;
