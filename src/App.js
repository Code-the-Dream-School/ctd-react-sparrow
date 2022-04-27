import React, { useEffect } from 'react'; 
import AddToDoForm from './addToDoForm';
import ToDoList from './todolist';

function App() {
  const useSemiPersistentState = () => {
    const [toDoList, setToDoList]= React.useState(JSON.parse(localStorage.getItem('savedToDoList')) || [] ) 
  
    useEffect(()=> {
      localStorage.setItem('savedToDoList', JSON.stringify(toDoList))
    }, [toDoList]);
    return [toDoList, setToDoList];
  }

  const [toDoList, setToDoList] = useSemiPersistentState();

  const addToDo= (newToDo)=> {
    setToDoList([...toDoList, newToDo])
  }
  const removeToDo= (id)=> {
    const filteredToDoList= toDoList.filter((todo) => todo.id !== id);
    setToDoList(filteredToDoList);
}
  return (
    <div style={{ textAlign: 'center' }}>
     <h1>To Do List</h1>
     <AddToDoForm onAddToDo={addToDo}/>
     <ToDoList toDoList={toDoList} onRemoveToDo={removeToDo}/> 
    </div>
  );
}

export default App;
