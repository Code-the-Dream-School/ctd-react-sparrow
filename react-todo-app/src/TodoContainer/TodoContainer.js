import React, { useState, useEffect } from "react";
import AddTodoForm from "./Components/AddTodoForm/AddTodoForm";
import TodoList from "./Components/TodoList/TodoList.js";
import ItemDescription from "./Components/ItemDescription/ItemDescription";
import style from "./TodoContainer.module.css";

import { Tooltip } from "antd";
import { Layout } from "antd";
import { Drawer } from "antd";
import { Pagination } from "antd";
import { Spin } from "antd";

import RedPillImg from "../UI/Images/red-pill.png";
import {
  requestGetTodo,
  requestAddTodo,
  requestDeleteTodo,
  requestEditTodo,
  requestSortData,
  requestEditDescription,
} from "./API";
// import {    handleImageClick  } from '../App'
import { SortAscendingOutlined } from "@ant-design/icons";
import { FieldTimeOutlined } from "@ant-design/icons";

const { Content, Header } = Layout;

const TodoContainer = ({ tableName, searchTerm, handleImageClick, image }) => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState("asc");
  const [itemDescription, setItemDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortByTimeAsc, setSortByTimeAsc] = useState(true);

  const handlePageChange = (page) => {
    setIsLoading(true);
    setCurrentPage(page);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const getPaginatedItems = () => {
    if (isLoading) {
      return [];
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return todoList.slice(startIndex, endIndex);
  };

  const handleItemsPerPageChange = (e) => {
    const selectedValue = Number(e.target.value);
    setItemsPerPage(selectedValue);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      setTimeout(async () => {
        try {
          const data = await requestGetTodo(tableName);
          setTodoList(data.records);
        } catch (error) {
          setErrorMessage(
            "Error fetching data from the server. Please try again."
          );
        }
        setIsLoading(false);
      }, 1000);
    };
    getData();
  }, [tableName]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const handleSortByTitle = async () => {
    setIsLoading(true);
    const isAscending = direction === "asc";
    const sortDirection = isAscending ? "desc" : "asc";
    setDirection(sortDirection);
    try {
      const result = await requestSortData(tableName, sortDirection);
      setTodoList(result.records);
    } catch (error) {
      setErrorMessage("Error sorting data. Please try again.");
    }
    setIsLoading(false);
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
    setItemDescription(id);
    setDrawerVisible(true);
  };

  return (
    <Layout
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Header
        className={style.header}
        mode="block"
        style={{
          backgroundColor: "var(--primary-color)",
          padding: "0 2rem",
          width: "100%",
          height: "3rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div className="logo">
          <p style={{ color: "#fff", fontSize: "20px" }}>LaserMind</p>
        </div>
      </Header>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className={style.container}>
          <div className={style.todo_list}>
            {errorMessage && <p className={style.error}>{errorMessage}</p>}{" "}
            {/* User error message */}
            <Tooltip title="Enter the Matrix!">
              <h1
                className={style.banner}
                onClick={() => handleImageClick(RedPillImg)}
              >
                To Do or Not To Do !
              </h1>
            </Tooltip>
            <Tooltip title="Click Me!">
              <img
                src={image}
                alt="{table_name}"
                className={style.image_link}
                onClick={() => handleImageClick(image)}
              />
            </Tooltip>
            <h5 className={style.table_name}>{tableName}</h5>
            <AddTodoForm
              onAddTodo={addTodo}
              todoList={todoList}
              tableName={tableName}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <div>
                <Tooltip title="Sort by Title">
                  <SortAscendingOutlined
                    className={style.sort_by_title}
                    onClick={handleSortByTitle}
                  />
                </Tooltip>
              </div>

              <div>
                <Tooltip title="Sort by Time">
                  <FieldTimeOutlined
                    className={style.sort_by_time}
                    onClick={handleSortByTime}
                  />
                </Tooltip>
              </div>
            </div>
            {isLoading ? (
              <Spin size="large" animation="border" variant="primary" />
            ) : (
              <TodoList
                searchTerm={searchTerm}
                onRemoveTodo={removeTodo}
                onEditTodo={editTodo}
                handleDescription={handleDescription}
                tableName={tableName}
                todoList={getPaginatedItems()}
              />
            )}
            <div
              className={style.pagination}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
            >
              <span style={{ marginRight: "1rem" }}>Items per page:</span>
              <select
                defaultValue={itemsPerPage}
                onChange={handleItemsPerPageChange}
                style={{ marginRight: "1rem" }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
              <span style={{ marginRight: "1rem" }}>Pages:</span>
              {isLoading ? (
                <Spin size="large" animation="border" variant="primary" />
              ) : (
                <Pagination
                  showQuickJumper
                  pageSizeOptions={["5", "10", "15"]}
                  current={currentPage}
                  total={todoList.length}
                  pageSize={itemsPerPage}
                  onChange={handlePageChange}
                  onShowSizeChange={handleItemsPerPageChange}
                  style={{ marginRight: "1rem" }}
                />
              )}
            </div>
          </div>

          <Drawer
            className="drawer-right"
            title="Action Steps:"
            placement="right"
            closable={true}
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            width={380}
            zIndex={10}
          >
            <ItemDescription
              itemDescription={itemDescription}
              onEditDescription={editDescription}
              todoList={todoList}
              tableName={tableName}
              setIsLoading={setIsLoading}
              setErrorMessage={setErrorMessage}
            />
          </Drawer>
        </div>
      </Content>
    </Layout>
  );
};

export default TodoContainer;
