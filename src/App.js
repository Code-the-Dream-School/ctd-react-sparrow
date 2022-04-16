import React from 'react'; 
import { useEffect } from 'react/cjs/react.production.min';
import AddToDoForm from './addToDoForm';
import ToDoList from './todolist';


function App() {
  const addToDo= (newToDo)=> {
    setToDoList([...toDoList, newToDo])
  }

  const useSemiPersistentState = () => {
      const [toDoList, setToDoList]= React.useState(JSON.parse(localStorage.getItem('savedToDoList')));

       useEffect(() => {
        localStorage.setItem('savedToDoList', JSON.stringify(toDoList))}, [toDoList]);
      return [toDoList, setToDoList];
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
