import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>Todo List</h1>
        <AddTodoForm />
        < TodoList />
        </header>
    </div>
  );
}

export default App;
