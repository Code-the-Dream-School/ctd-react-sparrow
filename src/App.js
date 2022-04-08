import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [newTodo, setNewTodo] = React.useState(''); 
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>Todo List</h1>
        </header>
        <AddTodoForm onAddTodo={setNewTodo}/>
        <p>{newTodo}</p>
        < TodoList />
    </div>
  );
}

export default App;
