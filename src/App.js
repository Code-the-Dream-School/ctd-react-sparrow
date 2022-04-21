import React from 'react';
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
//Challenges for this lesson
//1.[x]Move Todo List into State
//2.[x]Control "Add Todo" input 
//3.[x]Add New Todo to List 
//4.[x]Destructure Props 

const App = () => {
  //this state manages the data from the user input
  const [newTodo, setNewTodo] = React.useState('');
  const [todoLista, setTodoList] = React.useState([]);
  console.log();
  
  //function addTodo(newTodo) {
  //  setTodoList([...todoLista, newTodo])
  //

  console.log(`setTodoList function --> ${setTodoList}`);
  
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo /*addTodo*/} />
      {<p>{newTodo}</p>}
      <TodoList todoList={todoLista} />
    </div>
  );
}

export default App;
