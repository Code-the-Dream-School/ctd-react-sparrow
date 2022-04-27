import React from 'react';
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'


//Challenges for this lesson:
//1.[x]Save Todo List in Storage. 
//2.[x]Create a custom Hook.
//3.[x]Use fragments.

const useSemiPersistentState = () => {

  //This state renders our list with the user input
  //Passing information down the state to the TodoList component 
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')));

  //Use effect hook which in this case...
  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  },[todoList]);

  return (

   [todoList, setTodoList]
  )

};


const App = () => {
  
  const [todoList, setTodoList] = useSemiPersistentState();
  
  
  //This is my lift state that gets the information from the input 
  //and adds updates the state 
  const addTodo = (newTodo) => {
   setTodoList([...todoList, newTodo])
  }


  
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
