import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const addTodo = (newTodo) => (
    setTodoList([ ...todoList, newTodo ])
  );
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>Todo List</h1>
        </header>
        <AddTodoForm onAddTodo={addTodo}/>

        < TodoList todoList={todoList} />
    </div>
  );
}

export default App;
