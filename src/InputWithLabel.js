import React, { useRef, useEffect } from 'react';

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

export default InputWithLabel;