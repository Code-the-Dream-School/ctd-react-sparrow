import React, { useRef, useEffect } from 'react';

const InputWithLabel = (props) => {
    const inputRef = React.useRef();
  useEffect(() =>
        {inputRef.current.focus()}, []);
    return (
        <>
            <label htmlFor="toDoTitle">{props.children}</label>
            <input id="toDoTitle" type="text" name="title" value={props.toDoTitle} onChange={props.handleTitleChange} ref={inputRef}/>
        </>
    ) 
}

export default InputWithLabel;