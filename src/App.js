import React from 'react';
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
//Challenges for this lesson
//1.[x]Move Todo List into State
//2.[x]Control "Add Todo" input 
//3.[]Add New Todo to List 
//4.[]Destructure Props 

const App = () => {
  //this state manages the data from the user input
  //const [newTodo, setNewTodo] = React.useState('');
  const [todoList, setTodoList] = React.useState([]);
  
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={/*setNewTodo*/ addTodo} />
      {/*<p>{newTodo}</p>*/}
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
