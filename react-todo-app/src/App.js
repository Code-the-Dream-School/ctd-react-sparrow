import React, { useState, useEffect } from "react";
import AddTodoForm from "./Components/AddTodoForm/AddTodoForm";
import TodoList from "./Components/TodoList/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from "./App.module.css";
import PropTypes from "prop-types";
import axios from "axios";

const tableName = "Default";
const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}?view=Grid%20view`;
const urlPostDelete = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/`;

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const result = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      });
      setTodoList(result.data.records);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
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
    try {
      const result = await axios.post(
        urlPostDelete,
        {
          records: [
            {
              fields: {
                Title: newTodo.fields.Title,
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setTodoList([...todoList, ...result.data.records]);
    } catch (error) {
      console.error(error);
    }
  };

  const removeTodo = async (id) => {
    try {
      await axios.delete(urlPostDelete + id, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      });
      const newTodoList = todoList.filter((todo) => id !== todo.id);
      setTodoList(newTodoList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={style.container}>
              <h1 className={style.title}>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </div>
          }
        />
        <Route path="/work" element={<h1>Work Todo List</h1>} />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </Router>
  );
};

App.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};

export default App;
