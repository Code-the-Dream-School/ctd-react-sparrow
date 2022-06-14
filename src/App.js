import React from "react";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  //This state renders our list, and saved the value in the local storage
  //Passing information down the state to the TodoList component
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList"))
  );
  console.log(`todoList state ${todoList}`);

  //conditional renderting state
  const [isLoading, setIsloading] = React.useState(true);

  //This is a use effect hook which in this case is use to save the user input on local storage
  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  //Airtable APIs with the fetch method
  //This useEffect fetchs the data from airtable in the first render
  React.useEffect(() => {
    const reqUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;
    const optionsGet = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    fetch(reqUrl, optionsGet)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        setTodoList(result.records);
        setIsloading(false);
      });
  }, []);

  //This is my lift state that gets the information from user input
  //and adds updates the state
  //Now I'm using the Airtable API. This handler sends the data to Airtable
  const addTodo = (newTodo) => {
    //Example of fake data
    // const data = {
    //   fields: {
    //     Title: "Wake up",
    //   },
    //   typecast: true,
    // };

    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ records: [newTodo] }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    setTodoList([...todoList, newTodo]);
  };

  //This function uses the filter method to remove an item when the user
  //clicks the remove button
  //Now I'm using the Airtable API. This handler remove data from Airtable
  const removeTodo = (id) => {
    const DELETEurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`;

    fetch(DELETEurl, {
      method: "Delete",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        const removedItem = todoList.filter((todo) => todo.id !== id);
        setTodoList(removedItem);
      });

    const removedItem = todoList.filter((todo) => todo.id !== id);
    setTodoList(removedItem);
  };

  //This handler edits the data from the Airtable API
  const editTodo = (id, newEditTodo) => {
    console.log(newEditTodo);
    const EDITurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`;

    fetch(EDITurl, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEditTodo),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Router>
      <h1>Todo List Project</h1>
      <Routes>
        <Route
          index
          exact
          path="/"
          element={
            <>
              <AddTodoForm onAddTodo={addTodo} todoList={todoList} />
              <TodoList
                todoList={todoList}
                onRemoveTodo={removeTodo}
                onEditTodo={editTodo}
              />
            </>
          }
        />
        <Route path="/new" element={<h1>New Todo</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
