import React, { useEffect } from 'react'; 
import AddToDoForm from './addToDoForm';
import ToDoList from './todolist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './ToDoList.module.css';

function App() {
   //read the list from local storage after load 
  const [toDoList, setToDoList]= React.useState([]); 
  const [isLoading, setIsLoading]= React.useState(true);
  const addToDo= (newToDo)=> {
    setToDoList([...toDoList, newToDo])
  }
  useEffect(()=> {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, 
    {headers: {Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
    .then((result)=> {
      return result.json();
    })
    .then((result)=> {
      setToDoList(result.records);
      setIsLoading(false);
    })
    .catch(() => {
      throw new Error;
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
   <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<h1>Home</h1>}/>
      <Route path="new" element={<h1>New To Do List</h1>}/>
      </Routes>
      <div  className= {style.Root}>
        <div>
          <h1>To Do List</h1>
          <AddToDoForm onAddToDo={addToDo}/>
          {isLoading=== true && <p>Loading....</p>}
          {isLoading=== false && <ToDoList toDoList={toDoList} onRemoveToDo={removeToDo}/>}
        </div>   
      </div>
    </BrowserRouter>
  );
}

export default App;
