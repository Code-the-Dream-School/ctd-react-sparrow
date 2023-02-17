import React, { useState, useEffect } from "react";
import "./App.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const tableName = "Default";
const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}?view=Grid%20view`;
const urlPostDelete = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/`;

const App = () => {
  const [todoList, setTodoList] = useState([]);
  /*(
        JSON.parse(localStorage.getItem("savedTodoList")) || []
    );*/

  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
      .then((result) => result.json())
      .then((result) => setTodoList(result.records));
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  // POST method

  const addTodo = async (newTodo, tableName) => {
    await fetch(urlPostDelete, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Title: newTodo.fields.Title,
            },
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTodoList([...todoList, ...result.records]);
      })

      .catch((error) => {
        console.log("Error:", error);
      });
  };

  /*
    remove todo functions takes id and filters out items that are not equal to item id, sends
    delete request using fetch to airtable and deletes that record on airtable
    */
  const removeTodo = async (id) => {
    await fetch(urlPostDelete + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => console.log("DELETE: ", res));

    const newTodoList = todoList.filter((todo) => id !== todo.id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList
          className="wrapper"
          onRemoveTodo={removeTodo}
          todoList={todoList}
        />
      )}
    </>
  );
};

export default App;
