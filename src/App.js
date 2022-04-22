import React from 'react';
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
//Challenges for this lesson
//1.[x]Move Todo List into State
//2.[x]Control "Add Todo" input 
//3.[x]Add New Todo to List 
//4.[x]Destructure Props 

const App = () => {
  //This state renders our list with the user input
  //Passing information down the state to the TodoList component 
  const [todoList, setTodoList] = React.useState([]);
  console.log();
  
  //This is my lift state that gets the information from the input 
  //and adds updates the state 
  const addTodo = (newTodo) => {
   setTodoList([...todoList, newTodo])
  }


  
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
