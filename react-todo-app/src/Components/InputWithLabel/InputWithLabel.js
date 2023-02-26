import * as React from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({
  todoTitle,
  handleTitleChange,
  children,
  labelStyle,
}) => {
  //useRef and useEffect hook keep the focus on the input field
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle" style={labelStyle}>
        {children}
      </label>
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

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
  children: PropTypes.node,
  labelStyle: PropTypes.object,
};

export default InputWithLabel;
