import React from 'react';

const AddTodoForm = () => {
    return(
        <form>
            <label htmlFor="todoTitle">Tittle</label>
            <input id="todoTitle"/>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;