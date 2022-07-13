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
  fetchRequestSortData,
} from "./API"
import { ReactComponent as SortButton } from "./Components/IconsComponents/sort.svg"

const TodoContainer = ({ tableName, sideBar, searchTerm, setCurrentLink }) => {
  const [todoList, setTodoList] = React.useState([])
  const [isLoading, setIsloading] = React.useState(true)
  const [direction, setDirection] = React.useState("asc")
  const [itemDescription, setItemDescription] = React.useState("") //gets the id from the child component
  const [showDescription, setShowDescription] = React.useState(false) //hides description with notebutton

  //Get List
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
  }, [tableName])

  //-----------> Sort Section <--------------//
  const handleSort = () => {
    const sortDirection = direction === "desc" ? "asc" : "desc"
    setDirection(sortDirection)
    requestSortedList()
  }
  const requestSortedList = () => {
    fetchRequestSortData(tableName, direction).then((result) => {
      setTodoList(result.records)
    })
    setIsloading(false)
  }

  // -------------> Add Section <------------//
  //Lift state and used spread to copy old object
  const addTodo = (newTodo, tableName) => {
    fetchRequestAddTodo(newTodo, tableName).then((data) => {
      setTodoList([...todoList, ...data.records])
    })
  }

  //-----------> Delete Section <------------//
  //lifted state and filter the data
  const removeTodo = (id, tableName) => {
    fetchRequestDeleteTodo(id, tableName).then((data) => {
      const removedItem = todoList.filter((todo) => todo.id !== data.id)
      setTodoList(removedItem)
    })
  }

  //--------------> Edit Section <-------------//
  //Map the response and add new data from the user
  const editTodo = (id, newEditTodo, tableName) => {
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

  /* -----------> Item description Section <----------*/
  const editDescription = (id, newEditDescription, tableName) => {
    fetchRequestEditDescription(id, newEditDescription, tableName).then(
      (data) => {
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
