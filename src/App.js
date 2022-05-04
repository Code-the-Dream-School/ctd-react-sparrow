import React from "react";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
//Challenges for this lesson:
//1.[x]Create Reusable Input with Label Component.
//2.[x]Refactor input with label to use Component Composition.
//3.[x]Add Auto-Focus to Input.
//4.[x]Add "Remove" Button to List Items.

//This "Custom component" puts together two hooks that usualy go together, it would be a god practice
//to create a separate file just for this component and imported in my App component.
const useSemiPersistentState = () => {
  //This state renders our list with user input, and saved the value in the local storage
  //Passing information down the state to the TodoList component
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  console.log(todoList);

  //Use effect hook which in this case... is use to save the user input
  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    console.log("what is going on");
  }, [todoList]);
  return [todoList, setTodoList];
};

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState();

  //This is my lift state that gets the information from the input
  //and adds updates the state
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  //Splicemethod( start , delete , add(as many elements as you want))
  /*
  1.Start: Index where you want to change your array
  2.Delete: Number of elements in the array to remove
  3.Add: Add new Elements
  
  const removeTodo = (id) => {
    console.log(id);
    const removedItem = todoList.splice(id, 1);
    console.log(removedItem);
    setTodoList(removedItem);
  };
  */

  const removeTodo = (id) => {
    const removedItem = todoList.filter((todo) => todo.id !== id);
    setTodoList(removedItem);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
};

export default App;
