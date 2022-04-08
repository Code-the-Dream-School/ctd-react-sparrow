import React from 'react'; 
import AddToDoForm from './addToDoForm';
import ToDoList from './todolist';



function App() {
  const [toDoList, setToDoList]= React.useState([]);
  const addToDo= (newToDo)=> {
    setToDoList([...toDoList, newToDo])
  }
  return (
    <div style={{ textAlign: 'center' }}>
     <h1>To Do List</h1>
     <AddToDoForm onAddToDo={addToDo}/>
     <ToDoList toDoList={toDoList}/> 
    </div>
  );
}

export default App;
