import React, { useEffect } from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddToDoForm from './addToDoForm';
import ToDoList from './todolist';
import style from './ToDoList.module.css';

function App() {
  
   //state and basic API url
  const [toDoList, setToDoList]= React.useState([]); 
  const [isLoading, setIsLoading]= React.useState(true);
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view`
  const updateURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/`
  
  //read the list from local storage after load 
  useEffect(()=> {
    //fetching data from AirTable and parsing it
   fetch(url, 
    {method: "GET",
    headers: {Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
    .then((result)=> {
    return result.json();
    })
    .then((result)=> {
    setToDoList(result.records);
    setIsLoading(false);
    })
    .catch((error) => {
    console.log(error);
    })
  }, [toDoList.length]);

  const addToDo= (newToDo)=> {
    fetch(updateURL, {
      method: 'POST',
      headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Title: newToDo.title.trim(),
            },
          },
        ],
      }),
    })
    .then((result) => {
      return result.json()
    })
    .then((result) => {  
      console.log(result.records);
      setToDoList([...toDoList, result.records[0]])
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const airtableDelete = (id) => {
    console.log(`This has the id of ${id}`)
    fetch(`${updateURL}${id}`, 
    {method: "DELETE",
    headers: {Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`},
    'Content-Type': 'application/json'})
    .catch((error) => {
    console.log(error);
    })
  }

//remove the ToDo from the displayed list and send delete request to Airtable API for that item
  const removeToDo= (id)=> {
    const filteredToDoList= toDoList.filter((todo)=> todo.id !== id);
    setToDoList(filteredToDoList);
    airtableDelete(id);
  }
  
  return (
   <BrowserRouter>
     <div  className= {style.Header}>
        <Routes>
          <Route exact path="/" element={<h1>Home</h1>}/>
          <Route path="new" element={<h1>New To Do List</h1>}/>
        </Routes>
      </div>
      <div  className= {style.Root}>
        <div className= {style.Container}>
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
