import React from "react";
import ReactDOM from 'react-dom';


export default function AddTodoForm() {
    return (
        <form> 
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" type="text"/>
            <button type="submit">Add</button>
        </form>
        
    );
}

