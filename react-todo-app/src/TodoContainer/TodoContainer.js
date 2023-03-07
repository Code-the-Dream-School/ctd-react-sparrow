import React, { useState, useEffect } from "react";
import AddTodoForm from "./Components/AddTodoForm/AddTodoForm";
import TodoList from "./Components/TodoList/TodoList.js";
import ItemDescription from "./Components/ItemDescription/ItemDescription";
import style from "./TodoContainer.module.css";
import PropTypes from "prop-types";
import {
  requestGetTodo,
  requestAddTodo,
  requestDeleteTodo,
  requestEditTodo,
  requestSortData,
  requestEditDescription,
} from "./API";

import { ReactComponent as SortButton } from "./Components/IconsComponents/sort.svg";

const TodoContainer = ({
  tableName,
  sideBar,
  searchTerm,
  setCurrentLink,
  image,
}) => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState("asc");
  const [itemDescription, setItemDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await requestGetTodo(tableName);
        setTodoList(data.records);
      } catch (error) {
        setErrorMessage(
          "Error fetching data from the server. Please try again."
        );
      }
      setIsLoading(false);
    };
    getData();
  }, [tableName]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const handleSort = async () => {
    const isAscending = direction === "asc";
    const sortDirection = isAscending ? "desc" : "asc";
    setDirection(sortDirection);
    try {
      const result = await requestSortData(tableName, direction);
      setTodoList(result.records);
    } catch (error) {
      setErrorMessage("Error sorting data. Please try again.");
    }
    setIsLoading(false);
  };

  const addTodo = async (newTodo, tableName) => {
    try {
      const data = await requestAddTodo(newTodo, tableName);
      setTodoList([...todoList, ...data.records]);
    } catch (error) {
      setErrorMessage("Error adding todo item. Please try again.");
    }
    setIsLoading(false);
  };

  const removeTodo = async (id, tableName) => {
    try {
      const data = await requestDeleteTodo(id, tableName);
      const newTodoList = todoList.filter((todo) => todo.id !== data.id);
      setTodoList(newTodoList);
    } catch (error) {
      setErrorMessage("Error deleting todo item. Please try again.");
    }
    setIsLoading(false);
  };

  const editTodo = async (id, newEditTodo, tableName) => {
    try {
      const data = await requestEditTodo(id, newEditTodo, tableName);
      const editedTodoList = todoList.map((todoItem) => {
        if (todoItem.id === data.id) {
          return {
            ...todoItem,
            fields: {
              ...todoItem.fields,
              Title: data.fields.Title,
              Description: data.fields.Description,
              Done: data.fields.Done,
            },
          };
        }
        return todoItem;
      });
      setTodoList(editedTodoList);
    } catch (error) {
      setErrorMessage("Error editing todo item. Please try again.");
    }
    setIsLoading(false);
  };

  /* -----------> Item description Section <----------*/
  const editDescription = async (id, newEditDescription, tableName) => {
    try {
      setIsLoading(true);
      const data = await requestEditDescription(
        id,
        newEditDescription,
        tableName
      );
      const editedTodoList = todoList.map((todoItem) => {
        if (todoItem.id === data.id) {
          return {
            ...todoItem,
            fields: {
              ...todoItem.fields,
              Title: data.fields.Title,
              Description: data.fields.Description,
              Done: data.fields.Done,
            },
          };
        }
        return todoItem;
      });
      setTodoList(editedTodoList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDescription = (id) => {
    setShowDescription(!showDescription);
    setItemDescription(id);
  };

  return (
    <div className={sideBar ? style["todo_container"] : style["active"]}>
      <div className={style.split_box}>
        <div className={style.left_pane}>
          {errorMessage && <p className={style.error}>{errorMessage}</p>}{" "}
          {/* User error message */}
          <h1 className={style.banner}>To Do or Not To Do !</h1>
          <img src={image} alt="" className={style.image_link} />
          <h5 className={style.tableId}>{tableName}</h5>
          <AddTodoForm
            onAddTodo={addTodo}
            todoList={todoList}
            tableName={tableName}
          />
          <SortButton className={style.sort_button} onClick={handleSort} />
          {isLoading ? (
            <span className={style.loading_text}>Is loading...</span>
          ) : (
            <TodoList
              searchTerm={searchTerm}
              todoList={todoList}
              onRemoveTodo={removeTodo}
              onEditTodo={editTodo}
              handleDescription={handleDescription}
              tableName={tableName}
            />
          )}
        </div>
        {showDescription ? (
          <div className={style.right_pane}>
            <ItemDescription
              tableName={tableName}
              todoList={todoList}
              itemDescription={itemDescription}
              onEditDescription={editDescription}
              setShowDescription={setShowDescription}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

TodoContainer.propTypes = {
  tableName: PropTypes.string,
  setCurrentLink: PropTypes.func,
  sideBar: PropTypes.bool,
};
export default TodoContainer;
