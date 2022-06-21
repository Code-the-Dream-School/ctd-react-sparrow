import React from "react";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import styles from "./App.module.css";
import NavMain from "../UI/NavMain";
//import "./index.css";
//import SideVar from "./UI/SideVar/SideVar";

const App = () => {
  //This state renders our list, and saved the value in the local storage
  //Passing information down the state to the TodoList component
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  //conditional renderting state
  const [isLoading, setIsloading] = React.useState(true);

  //This is a use effect hook which in this case is use to save the user input on local storage
  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  //Airtable APIs with the fetch method
  //GET
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
        console.log(result);
        setTodoList(result.records);
        setIsloading(false);
      });
  }, []);

  // POST method
  //Lift state
  const addTodo = (newTodo) => {
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
        console.log(data);
        setTodoList([...todoList, ...data.records]);
      })
      .then((response) => {
        console.log("Success:", response);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  //Delete method
  //lifted state and filter method
  const removeTodo = (id) => {
    const DELETEurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`;

    fetch(DELETEurl, {
      method: "Delete",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    });
    //.then((response) => {
    //   console.log(response);
    //   response.json();
    // });
    // .then((data) => {
    //   console.log(data);
    //Question what do I do with the response?
    const removedItem = todoList.filter((todo) => todo.id !== id);
    setTodoList(removedItem);
    // });
  };

  //PATCH method
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
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
    const editedTodoItem = todoList.map((todoItem) => {
      if (todoItem.id === id) {
        todoItem = newEditTodo;
      }
      return todoItem;
    });
    console.log(editedTodoItem);
    setTodoList(editedTodoItem);
  };

  return (
    //  <div className={styles.app_container}>
    <div>
      <h1>Todo App</h1>
      <Router>
        <NavMain></NavMain>
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
          <Route path="/habit" element={<h1>Habits</h1>} />
          <Route path="/goal" element={<h1>Goals</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
