import React from 'react';  
import AddToDoForm from './addToDoForm';
import ToDoList from './todolist';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
     <h1>To Do List</h1>
     <AddToDoForm/>
     <ToDoList/> 
    </div>
  );
}

export default App;
