import React, { useRef , useEffect } from 'react';
import propTypes from 'prop-types';
const InputWithLabel= ({children, toDoTitle, handleTitleChange}) => {
    const inputRef= React.useRef();
  useEffect(()=>
        {inputRef.current.focus()}, []);
    return (
        <>
            <label htmlFor="toDoTitle">{children}</label>
            <input id="toDoTitle" type="text" name="title" value={toDoTitle} onChange={handleTitleChange} ref={inputRef}/>
        </>
    ) 
}

InputWithLabel.propTypes = {
    children: propTypes.string,
    toDoTitle: propTypes.string.isRequired,
    handleTitleChange: propTypes.func.isRequired
}

export default InputWithLabel;