import React from "react";
import style from "./TodoListItem.module.css";
import { ReactComponent as XIcon } from "../IconsComponents/x.svg";
import { ReactComponent as NoteIcon } from "../IconsComponents/note.svg";

//This component renders each element of the list, edit, and remove button
const TodoListItem = ({
  todoList,
  onRemoveTodo,
  onEditTodo,
  handleDescription,
  tableId,
}) => {
  //Shows the input field when the user clicks on an item
  const [isToggle, setToggle] = React.useState(false);

  //controls input field for the edit button
  const [todoEditTitle, setTodoEditTitle] = React.useState(
    todoList.fields.Title
  );

  //handles:
  // get the value from the user input to edit the current item
  const onChangeEdit = (e) => {
    const editTodo = e.target.value;
    setTodoEditTitle(editTodo);
  };

  //updates the value, sends the user iput up to todoContainer
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
            onClick={() => handleDescription(todoList.id, tableId)}
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

export default TodoListItem;