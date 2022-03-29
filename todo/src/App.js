import React from "react";
import AddTodoForm from "./AddTodoForm";
import './App.css';
import TodoList from './TodoList';

function App() {
  const [newTodo, setNewTodo] = React.useState('');
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;