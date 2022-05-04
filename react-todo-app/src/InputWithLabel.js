import React from "react";
import { useEffect, useRef } from "react";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
  let inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{children} </label>
      <input
        ref={inputRef}
        id="todoTitle"
        value={todoTitle}
        name="title"
        type="text"
        onChange={handleTitleChange}
        placeholder="Add a Todo"
      />
    </>
  );
}
export default InputWithLabel;
