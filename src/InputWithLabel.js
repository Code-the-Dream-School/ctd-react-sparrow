import React from 'react';
const InputWithLabel = ({
    id,
    todoTitle,
    type='text',
    handleTitleChange,
    isFocused,
    children,
}) => {
    const inputRef = React.useRef();

    React.useEffect(() => {
           if (isFocused && inputRef.current){
               inputRef.current.focus();
           }
    }, [isFocused]);

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                name="title"
                type={type}
                id={id}
                ref={inputRef}
                value={todoTitle}
                onChange={handleTitleChange}>
            </input>
        </>
    );
};

export default InputWithLabel;