import React from "react";
import style from "./TodoListItem.module.css";

//This component renders each element of the list, edit, and remove button
const TodoListItem = ({
  todoListItems,
  onRemoveTodo,
  onEditTodo,
  handleDescription,
  tableId,
}) => {
  const [isToggle, setToggle] = React.useState(false);

  //controls input field for the edit button
  const [todoEditTitle, setTodoEditTitle] = React.useState(
    todoListItems.fields.Title
  );

  const onChangeEdit = (e) => {
    const editTodo = e.target.value;
    setTodoEditTitle(editTodo);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onEditTodo(
      todoListItems.id,
      {
        fields: {
          Title: todoEditTitle,
          Description: todoListItems.fields.Description,
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
            <input id="edit" value={todoEditTitle} onChange={onChangeEdit} />
          </form>
        ) : (
          <p>{todoListItems.fields.Title}</p>
        )}
        <button
          type="button"
          onClick={() => {
            setToggle(true);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            onRemoveTodo(todoListItems.id, tableId);
          }}
        >
          Remove
        </button>
        <button onClick={() => handleDescription(todoListItems.id)}>
          text area
        </button>
      </li>
    </div>
  );
};

export default TodoListItem;
