import * as React from "react";

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  //useRef and useEffect hook keep the focus on the input field
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
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
