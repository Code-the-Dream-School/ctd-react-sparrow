import React from 'react';
import TodoList from './TodoList.js'
import AddTodoForm from './AddTodoForm.js'
import { useState } from 'react/cjs/react.production.min';

function App() {
  const [newTodo, setNewTodo] = React.useState("")

  return (
  <div>
    <h1>Todo List</h1>
    <AddTodoForm  onAddTodo={setNewTodo}/>
    <p>{newTodo}</p>
    <TodoList/>
  </div>
  );
}
export default App;