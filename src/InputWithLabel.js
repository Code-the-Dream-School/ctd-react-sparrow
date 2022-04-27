import React, { useRef } from 'react'

export default function InputWithLabel (props) {
    return (
        <>
            <input id="toDoTitle" type="text" name="title" value={props.toDoTitle} onChange={props.handleTitleChange}/>
            <label htmlFor="toDoTitle">Title</label>
        </>
    ) 

}