import React from "react";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Challenges for this lesson:
//1.[x]Install React Router.
//2.[x]Setup Router.
//3.[x]Add New Route.

const App = () => {
  //This state renders our list with user input, and saved the value in the local storage
  //Passing information down the state to the TodoList component
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList"))
  );
  console.log(todoList);

  //This state is managing the loading of the mock data (now real data)
  const [isLoading, setIsloading] = React.useState(true);

  //This useEffect fetchs the data from airtable in the first render
  React.useEffect(() => {
    const reqUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    fetch(reqUrl, options)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        setTodoList(result.records);
        setIsloading(false);
      });
  }, []);

  //This is a use effect hook which in this case is use to save the user input on local storage
  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  //This is my lift state that gets the information from the input
  //and adds updates the state
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  //This function uses the filter method to remove an item when the user
  //clicks the remove button
  const removeTodo = (id) => {
    const removedItem = todoList.filter((todo) => todo.id !== id);
    setTodoList(removedItem);
  };

  return (
    <Router>
      <h1>Todo List Project</h1>
      <Routes>
        <Route
          index
          exact
          path="/"
          element={<TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
        />
        <Route
          path="/new"
          element={<AddTodoForm onAddTodo={addTodo} todoList={todoList} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
