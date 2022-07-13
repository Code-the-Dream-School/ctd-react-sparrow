import React from "react"
import style from "./TodoListItem.module.css"
import { ReactComponent as XIcon } from "../IconsComponents/x.svg"
import { ReactComponent as NoteIcon } from "../IconsComponents/note.svg"
import PropTypes from "prop-types"

//This component renders each element of the list, edit, and remove button.
const TodoListItem = ({
  todoList,
  onRemoveTodo,
  onEditTodo,
  handleDescription,
  tableName,
}) => {
  //Shows the input field when the user clicks on an item
  //to edit the task
  const [isToggle, setToggle] = React.useState(false)

  //controls input field for the edit button
  const [todoEditTitle, setTodoEditTitle] = React.useState(
    todoList.fields.Title
  )

  //Edit button authentication

  //handles for edit:
  // get the value from the user input to edit the current item
  const onChangeEdit = (e) => {
    const editTodo = e.target.value
    setTodoEditTitle(editTodo)
  }

  //updates the value, when the user edits it and sends it up to todoContainer
  const onSubmit = (e) => {
    e.preventDefault()
    if (todoEditTitle.trim().length === 0) {
      alert("Task cannot be blank")
    } else {
      onEditTodo(
        todoList.id,
        {
          fields: {
            Title: todoEditTitle,
            Description: todoList.fields.Description,
          },
        },
        tableName
      )
      setToggle(false)
    }
  }

  //Checkbox section
  const [isChecked, setIsChecked] = React.useState("false")
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className={style.listItem_container}>
      <li className={style.listItem}>
        <input
          className={style.checkbox}
          type="checkbox"
          onChange={() => handleCheckBoxChange()}
        />
        {isToggle ? (
          <form onSubmit={onSubmit} className={style.form}>
            <label htmlFor="edit"></label>
            <input
              id="edit"
              value={todoEditTitle}
              onChange={onChangeEdit}
              className={style.edit_input}
            />
          </form>
        ) : (
          <p
            className={style.item_text}
            onClick={() => {
              setToggle(true)
            }}
            style={!isChecked ? { textDecoration: "line-through" } : null}
          >
            {todoList.fields.Title}
          </p>
        )}
        <div>
          <NoteIcon
            className={style.icons}
            onClick={() => handleDescription(todoList.id)}
          />
          <XIcon
            className={style.icons}
            onClick={() => {
              onRemoveTodo(todoList.id, tableName)
            }}
          />
        </div>
      </li>
    </div>
  )
}

TodoListItem.prototype = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  handleDescription: PropTypes.func,
  tableName: PropTypes.string,
}

export default TodoListItem
