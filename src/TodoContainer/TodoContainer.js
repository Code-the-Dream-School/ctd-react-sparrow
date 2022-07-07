import React from "react";
import AddTodoForm from "./Components/AddTodoForm/AddTodoForm";
import TodoList from "./Components/TodoList";
import ItemDescription from "./Components/ItemDescription/ItemDescription";
import Search from "./Components/Search/Search";
import style from "./TodoContainer.module.css";
import PropTypes from "prop-types";

const TodoContainer = ({ tableId, setCurrentLink, sideBar }) => {
  //This state renders our list, and saved the value in the local storage
  //Pass information down to the TodoList component
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );
  // JSON.parse(localStorage.getItem("savedTodoList")) || []

  //conditional renderting state
  const [isLoading, setIsloading] = React.useState(true);

  // This is a use effect hook which in this case is use to save the user input on local storage
  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  //Airtable APIs with the fetch method:

  //GET
  //const reqUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableId}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`;
  React.useEffect(() => {
    const reqUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableId}?view=Grid%20view`;
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
      });
    setIsloading(false);
  }, []);

  //Sort section: I used a function that would change the
  const [direction, setDirection] = React.useState("asc");
  console.log(direction);
  const handleSort = () => {
    const sortDirection = direction === "desc" ? "asc" : "desc";
    setDirection(sortDirection);
    requestSortedList();
  };
  // useEffect for soting the data
  // React.useEffect(() => {
  const requestSortedList = () => {
    const reqUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableId}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=${direction}`;
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
      });
    setIsloading(false);
  };
  // }, [direction]);

  // POST method
  //Lift state
  const addTodo = (newTodo, tableId) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableId}`,
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

  //DeLETE method
  //lifted state and filter the data
  const removeTodo = (id, tableId) => {
    const DELETEurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableId}/${id}`;

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
  //Map the response and add new data from the user
  const editTodo = (id, newEditTodo, tableId) => {
    console.log("new edit todo", newEditTodo);
    const EDITurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableId}/${id}`;

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
        //make a new list
        const editedTodoList = todoList.map((todoItem) => {
          if (todoItem.id === data.id) {
            return {
              ...todoItem,
              fields: {
                ...todoItem.fields,
                Title: data.fields.Title,
                Description: data.fields.Description,
              },
            };
          }
          return todoItem;
        });
        setTodoList(editedTodoList);
      });
  };

  //Item description section
  //PATCH method for ItemDescription
  const editDescription = (id, newEditDescription, tableId) => {
    console.log("new edit todo", newEditDescription);
    const EDITurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableId}/${id}`;

    fetch(EDITurl, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEditDescription),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        //make a new list with different description
        const editedTodoList = todoList.map((todoItem) => {
          if (todoItem.id === data.id) {
            return {
              ...todoItem,
              fields: {
                ...todoItem.fields,
                Title: data.fields.Title,
                Description: data.fields.Description,
              },
            };
          }
          return todoItem;
        });
        setTodoList(editedTodoList);
      });
  };

  const [itemDescription, setItemDescription] = React.useState("");
  console.log(itemDescription);

  const handleDescription = (id) => {
    setItemDescription(id);
  };

  //Search filter Section
  const [searchTerm, setSearchTerm] = React.useState("");
  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  //   onSearch(e);
  // };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={sideBar ? style["todo_container"] : style["active"]}>
      <div className={style.split_box}>
        <div className={style.left_pane}>
          <Search onSearch={handleSearch} />
          <h5 className={style.tableId}>{tableId}</h5>
          <AddTodoForm
            onAddTodo={addTodo}
            todoList={todoList}
            tableId={tableId}
          />
          <button onClick={handleSort}>sort</button>
          <TodoList
            searchTerm={searchTerm}
            todoList={todoList}
            onRemoveTodo={removeTodo}
            onEditTodo={editTodo}
            handleDescription={handleDescription}
            tableId={tableId}
          />
        </div>
        <div className={style.right_pane}>
          <ItemDescription
            tableId={tableId}
            todoList={todoList}
            itemDescription={itemDescription}
            onEditDescription={editDescription}
          />
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

TodoContainer.propTypes = {
  tableId: PropTypes.string,
  setCurrentLink: PropTypes.func, // This is supposed to be a string
  sideBar: PropTypes.bool,
};
export default TodoContainer;
