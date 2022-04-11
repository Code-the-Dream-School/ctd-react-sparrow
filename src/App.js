import * as React from 'react';
import TodoList from "./TodoList"
import AddTodoForm from  "./AddTodoForm"


function Search(){
  const handleChange = (event) => {
    console.log(event);
  }
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type = "text" onChange={handleChange} />
    </div>
  )
  }

function App() {
  const [newTodo, setNewTodo] = React.useState('');
  return (
    <div>
      <h1>To do List for CTD</h1>
      <AddTodoForm onAddTodo = {setNewTodo} />
      <p>
        <strong>{newTodo}</strong>
      </p>
      <TodoList/>
      <Search/>
    </div>
  );
}

export default App;