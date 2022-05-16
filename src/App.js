import React from "react";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
//Challenges for this lesson:
//1.[x]Remove Custom Hook.
//2.[x]Async.
//3.[x]Add Loading State.
//4.[]Create Conditional Loading Indicator.

const App = () => {
  //This state renders our list with user input, and saved the value in the local storage
  //Passing information down the state to the TodoList component
  const [todoList, setTodoList] = React.useState([]);
  console.log(todoList);

  //This state is managing the loading mock data
  const [isLoading, setIsloading] = React.useState(true);

  //Second useEffect hook, which help us to save the data on LocalStorage
  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
          },
        });
      }, 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsloading(false);
    });
  }, []);

  //This is a use effect hook which in this case... is use to save the user input
  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
    console.log("what is going on");
  }, [todoList]);

  //This is my lift state that gets the information from the input
  //and adds updates the state
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const removedItem = todoList.filter((todo) => todo.id !== id);
    setTodoList(removedItem);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
};

export default App;
