import React from "react";
import style from "./TodoListItem.module.css";
import { ReactComponent as XIcon } from "../IconsComponents/x.svg";
import { ReactComponent as NoteIcon } from "../IconsComponents/note.svg";
import PropTypes from "prop-types";

//This component renders each element of the list, edit, and remove button.
const TodoListItem = ({
  todoList,
  onRemoveTodo,
  onEditTodo,
  handleDescription,
  tableId,
}) => {
  //Shows the input field when the user clicks on an item
  //to edit the task
  const [isToggle, setToggle] = React.useState(false);

  //controls input field for the edit button
  const [todoEditTitle, setTodoEditTitle] = React.useState(
    todoList.fields.Title
  );

  //handles for edit:
  // get the value from the user input to edit the current item
  const onChangeEdit = (e) => {
    const editTodo = e.target.value;
    setTodoEditTitle(editTodo);
  };

  //updates the value, when the user edits it and sends it up to todoContainer
  const onSubmit = (e) => {
    e.preventDefault();
    onEditTodo(
      todoList.id,
      {
        fields: {
          Title: todoEditTitle,
          Description: todoList.fields.Description,
        },
      },
      tableId
    );
    setToggle(false);
  };

  return (
    <div className={style.listItem_container}>
      <li className={style.listItem}>
        {isToggle ? (
          <form onSubmit={onSubmit}>
            <label htmlFor="edit"></label>
            <input
              id="edit"
              value={todoEditTitle}
              onChange={onChangeEdit}
              className={style.edit_input}
            />
          </form>
        ) : (
          <span
            onClick={() => {
              setToggle(true);
            }}
          >
            {todoList.fields.Title}
          </span>
        )}
        <div>
          <NoteIcon
            className={style.icons}
            onClick={() => handleDescription(todoList.id)}
          />
          <XIcon
            className={style.icons}
            onClick={() => {
              onRemoveTodo(todoList.id, tableId);
            }}
          />
        </div>
      </li>
    </div>
  );
};

TodoListItem.prototype = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  handleDescription: PropTypes.func,
  tableId: PropTypes.string,
};

export default TodoListItem;
