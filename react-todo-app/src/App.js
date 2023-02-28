import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import style from "./App.module.css";
import { FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";

import AddTodoForm from "./Components/AddTodoForm/AddTodoForm";
import TodoList from "./Components/TodoList/TodoList";

const tableName = "Default";
const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`;
const urlPostDelete = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/`;

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortByTitleAsc, setSortByTitleAsc] = useState(true);
  const [sortByTimeAsc, setSortByTimeAsc] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        });
        setTodoList(result.data.records);
      } catch (error) {
        setErrorMessage(
          "Failed to fetch data from server. Please try again later."
        );
        console.error(error);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const handleSortByTitle = () => {
    const sortedList = [...todoList].sort((a, b) => {
      if (sortByTitleAsc) {
        return a.fields.Title.localeCompare(b.fields.Title);
      } else {
        return b.fields.Title.localeCompare(a.fields.Title);
      }
    });
    setTodoList(sortedList);
    setSortByTitleAsc(!sortByTitleAsc);
  };

  const handleSortByTime = () => {
    const sortedList = [...todoList].sort((a, b) => {
      const createdTimeA = new Date(a.fields.createdTime);
      const createdTimeB = new Date(b.fields.createdTime);
      if (sortByTimeAsc) {
        return createdTimeA - createdTimeB;
      } else {
        return createdTimeB - createdTimeA;
      }
    });
    setTodoList(sortedList);
    setSortByTimeAsc(!sortByTimeAsc);
  };

  const addTodo = async (newTodo, tableName) => {
    try {
      const response = await axios.post(
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
      setTodoList([...todoList, ...response.data.records]);
    } catch (error) {
      setErrorMessage("Failed to add todo. Please try again later.");
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
      setErrorMessage("Failed to delete todo. Please try again later.");
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
              {errorMessage && <p className={style.error}>{errorMessage}</p>}{" "}
              {/* User error message */}
              <h1 className={style.title}>Todo List</h1>
              <div className="sort-buttons">
                <button className="sort-button" onClick={handleSortByTitle}>
                  Sort by Title{" "}
                  {sortByTitleAsc ? (
                    <FaSortAmountDownAlt />
                  ) : (
                    <FaSortAmountUp />
                  )}
                </button>
                <button className="sort-button" onClick={handleSortByTime}>
                  Sort by Time{" "}
                  {sortByTimeAsc ? <FaSortAmountDownAlt /> : <FaSortAmountUp />}
                </button>
              </div>
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
export default App;
