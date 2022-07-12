import React from "react"
import AddTodoForm from "./Components/AddTodoForm/AddTodoForm"
import TodoList from "./Components/TodoList/TodoList.js"
import ItemDescription from "./Components/ItemDescription/ItemDescription"
import style from "./TodoContainer.module.css"
import PropTypes from "prop-types"
import {
  fetchRequestAddTodo,
  fetchRequestDeleteTodo,
  fetchRequestEditTodo,
  fetchRequestEditDescription,
} from "./API"
import { ReactComponent as SortButton } from "./Components/IconsComponents/sort.svg"

const TodoContainer = ({ tableName, setCurrentLink, sideBar, searchTerm }) => {
  console.log(tableName)
  console.log(searchTerm)
  //This state renders our list, and saved the value in the local storage
  //Pass information down to the TodoList component
  const [todoList, setTodoList] = React.useState([])

  //conditional renderting state
  const [isLoading, setIsloading] = React.useState(true)

  //Airtable APIs with the fetch method:
  //GET
  //const reqUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`;
  React.useEffect(() => {
    const reqUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}?view=Grid%20view`
    const optionsGet = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }
    fetch(reqUrl, optionsGet)
      .then((response) => {
        if (response.ok) {
          console.log("HTTP request successful")
        }
        return response
      })
      .then((result) => {
        return result.json()
      })
      .then((result) => {
        setTodoList(result.records)
        setIsloading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  //Sort section: I used a function that would change the
  const [direction, setDirection] = React.useState("asc")
  console.log(direction)
  const handleSort = () => {
    const sortDirection = direction === "desc" ? "asc" : "desc"
    setDirection(sortDirection)
    requestSortedList()
  }
  // useEffect for soting the data
  // React.useEffect(() => {
  const requestSortedList = () => {
    const reqUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=${direction}`
    const optionsGet = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }
    fetch(reqUrl, optionsGet)
      .then((result) => {
        return result.json()
      })
      .then((result) => {
        setTodoList(result.records)
      })
    setIsloading(false)
  }
  // }, [direction]);

  // POST method
  //Lift state
  const addTodo = (newTodo, tableName) => {
    // fetch(
    //   `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ records: [newTodo] }),
    //   }
    // )
    //   .then((response) => response.json())
    fetchRequestAddTodo(newTodo, tableName).then((data) => {
      console.log(data)
      setTodoList([...todoList, ...data.records])
    })
  }

  //DeLETE method
  //lifted state and filter the data
  const removeTodo = (id, tableName) => {
    // const DELETEurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`

    // fetch(DELETEurl, {
    //   method: "Delete",
    //   headers: {
    //     Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    fetchRequestDeleteTodo(id, tableName).then((data) => {
      console.log(data.id)
      const removedItem = todoList.filter((todo) => todo.id !== data.id)
      console.log(removedItem)
      setTodoList(removedItem)
    })
  }

  //PATCH method
  //Map the response and add new data from the user
  const editTodo = (id, newEditTodo, tableName) => {
    console.log("EDIT TODO", tableName)
    // console.log("new edit todo", newEditTodo)
    // const EDITurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`

    // fetch(EDITurl, {
    //   method: "PATCH",
    //   headers: {
    //     Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newEditTodo),
    // })
    //   .then((response) => {
    //     return response.json()
    //   })
    fetchRequestEditTodo(id, newEditTodo, tableName).then((data) => {
      //make a new list
      const editedTodoList = todoList.map((todoItem) => {
        if (todoItem.id === data.id) {
          return {
            ...todoItem, //copy the list with spread
            fields: {
              ...todoItem.fields,
              Title: data.fields.Title,
              Description: data.fields.Description,
            },
          }
        }
        return todoItem
      })
      setTodoList(editedTodoList)
    })
  }

  /* -----------> Item description section <----------*/
  //PATCH method for ItemDescription
  console.log(tableName)
  const editDescription = (id, newEditDescription, tableName) => {
    console.log(tableName)
    // console.log("new edit todo", newEditDescription)
    // const EDITurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`

    // fetch(EDITurl, {
    //   method: "PATCH",
    //   headers: {
    //     Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newEditDescription),
    // })
    //   .then((response) => {
    //     return response.json()
    //   })
    fetchRequestEditDescription(id, newEditDescription, tableName).then(
      (data) => {
        console.log(data)
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
            }
          }
          return todoItem
        })
        setTodoList(editedTodoList)
      }
    )
  }

  const [itemDescription, setItemDescription] = React.useState("") //gets the id from the child component
  const [showDescription, setShowDescription] = React.useState(false) //hides description with notebutton

  const handleDescription = (id) => {
    setShowDescription(!showDescription)
    setItemDescription(id)
  }

  /*--------> Checkbox Sectiom <----------*/
  //To do:
  //Try to link this to airtable
  const handleCheckBox = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          done: !todo.done,
        }
      return todo
    })
    setTodoList(newTodoList)
    console.log(newTodoList)
  }

  return (
    <div className={sideBar ? style["todo_container"] : style["active"]}>
      <div className={style.split_box}>
        <div className={style.left_pane}>
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
              handleCheckBox={handleCheckBox}
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
  )
}

TodoContainer.propTypes = {
  tableName: PropTypes.string,
  setCurrentLink: PropTypes.func, // This is supposed to be a string
  sideBar: PropTypes.bool,
}
export default TodoContainer
