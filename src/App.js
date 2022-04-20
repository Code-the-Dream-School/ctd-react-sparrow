import * as React from 'react';
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"


/*function Search(){
  const handleChange = (event) => {
    console.log(event);
  }
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type = "text" onChange={handleChange} />
    </div>
  )
  }*/

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }
  return (
    <div>
      <h1>To do List for CTD</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}


export default App;