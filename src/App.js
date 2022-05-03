import React, { useEffect } from 'react'; 
import AddToDoForm from './addToDoForm';
import ToDoList from './todolist';

function App() {
   //read the list from local storage after load 
  const [toDoList, setToDoList]= React.useState([]); 
  const [isLoading, setIsLoading]= React.useState(true);
  const addToDo= (newToDo)=> {
    setToDoList([...toDoList, newToDo])
  }
  useEffect(()=> {
    new Promise((resolve, reject)=> setTimeout(()=> resolve({data: {toDoList: []} }), 2000))
    .then((result)=> {
      setToDoList(result.data.toDoList);
      setIsLoading(false);
    })
  }, []);
  //setting list from the input box
  useEffect(()=> {
    if (isLoading === false) {
      localStorage.setItem('savedToDoList', JSON.stringify(toDoList))
    }
  }, [toDoList]);
  const removeToDo= (id)=> {
    const filteredToDoList= toDoList.filter((todo)=> todo.id !== id);
    setToDoList(filteredToDoList);
}
  return (
    <div style={{ textAlign: 'center' }}>
     <h1>To Do List</h1>
     <AddToDoForm onAddToDo={addToDo}/>
     {isLoading=== true && <p>Loading....</p>}
     {isLoading=== false && <ToDoList toDoList={toDoList} onRemoveToDo={removeToDo}/>} 
    </div>
  );
}

export default App;
