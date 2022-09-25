import React from "react"
import InputWithLabel from "../InputWithLabel/InputWithLabel"
import style from "./AddTodoForm.module.css"
import { ReactComponent as AddIcon } from "../IconsComponents/addTask+.svg"
import PropTypes from "prop-types"

//This component renders the form (input field)
const AddTodoForm = ({ onAddTodo, tableName }) => {
  //This state controls the input field (it makes this component a controlled component)
  let [todoTitle, setTodoTitle] = React.useState("")

  //This event retrieves the information the user enters in the input field
  //and update the state in the now controlled component.
  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value
    setTodoTitle(newTodoTitle)
  }

  //This is a handler function (event listener) that gets trigger once the user clicks on the submit button
  //gets the updated state and send it back to the App component with a new id
  const handleAddTodo = (e) => {
    e.preventDefault()
    console.log(`input field => ${todoTitle}`)
    if (todoTitle.trim().length === 0) {
      alert("Input field is empty")
    } else {
      //The prop "onAddTodo" is the callback function from the parent component (App) with new state
      onAddTodo(
        {
          fields: {
            Title: todoTitle,
            Description: todoTitle.Description,
          },
        },
        tableName
      )
      setTodoTitle("")
    }
  }

  return (
    <form onSubmit={handleAddTodo} className={style.label_container}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      ></InputWithLabel>
      <button type="submit" className={style.add_button}>
        <AddIcon className={style.add_button} />
      </button>
    </form>
  )
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
  tableName: PropTypes.string,
}

export default AddTodoForm
