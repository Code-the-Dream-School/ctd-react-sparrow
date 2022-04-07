import React from 'react';  
import { useState } from 'react/cjs/react.production.min';
import AddToDoForm from './addToDoForm';
import ToDoList from './todolist';

const [toDoList, setToDoList]= useState([]);

function App() {
  const [newToDo, setNewToDo]= React.useState('');
  return (
    <div style={{ textAlign: 'center' }}>
     <h1>To Do List</h1>
     <AddToDoForm onAddToDo= {setNewToDo}/>
     <p>{newToDo}</p>
     <ToDoList/> 
    </div>
  );
}

export default App;
