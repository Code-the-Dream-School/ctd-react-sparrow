import React from "react";
import AddTodoForm from "./Components/AddTodoForm/AddTodoForm";
import TodoList from "./Components/TodoList";
import style from "./TodoContainer.module.css";
import ItemDescription from "./Components/ItemDescription/ItemDescription";

const TodoContainer = ({ tableId, setCurrentLink, sideBar }) => {
  //This state renders our list, and saved the value in the local storage
  //Passing information down the state to the TodoList component
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  console.log(todoList);

  //conditional renderting state
  const [isLoading, setIsloading] = React.useState(true);

  //This is a use effect hook which in this case is use to save the user input on local storage
  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  //Airtable APIs with the fetch method:

  //GET
  React.useEffect(() => {
    const reqUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableId}`;
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

  //Use effect with new id
  React.useEffect(() => {
    const reqUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableId}`;
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
  }, [setCurrentLink]);

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

  //Delete method
  //lifted state and filter method
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
  // const [toggleDescription, setToggleDescription] = React.useState(false);

  const [itemDescription, setItemDescription] = React.useState("");
  console.log(itemDescription);

  const handleDescription = (id) => {
    // setToggleDescription(!toggleDescription);
    setItemDescription(id);
  };

  return (
    <div className={sideBar ? style["todo_container"] : style["active"]}>
      <div className={style.split_box}>
        <div className={style.left_pane}>
          <h5 className={style.tableId}>{tableId}</h5>
          <AddTodoForm
            onAddTodo={addTodo}
            todoList={todoList}
            tableId={tableId}
          />
          <TodoList
            todoList={todoList}
            onRemoveTodo={removeTodo}
            onEditTodo={editTodo}
            handleDescription={handleDescription}
            tableId={tableId}
          />
        </div>
        <div className={style.right_pane}>
          {/* {toggleDescription && ( */}
          <ItemDescription
            todoList={todoList}
            itemDescription={itemDescription}
          />
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
