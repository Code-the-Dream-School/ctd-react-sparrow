import React from "react";
import style from "./TodoListItem.module.css";
import { ReactComponent as XIcon } from "../IconsComponents/x.svg";
import { ReactComponent as NoteIcon } from "../IconsComponents/note.svg";
import PropTypes from "prop-types";
import { requestEditCheck } from "../../API";

const TodoListItem = ({
  todoList,
  onRemoveTodo,
  onEditTodo,
  handleDescription,
  tableName,
}) => {
  const [isToggle, setToggle] = React.useState(false);
  const [todoEditTitle, setTodoEditTitle] = React.useState(
    todoList.fields.Title || ""
  );

  const onChangeEdit = (e) => {
    const editTodo = e.target.value;
    setTodoEditTitle(editTodo);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todoEditTitle.trim().length === 0) {
      alert("Action cannot be blank");
    } else {
      onEditTodo(
        todoList.id,
        {
          fields: {
            Title: todoEditTitle,
            Description: todoList.fields.Description,
            Done: todoList.fields.Done,
          },
        },
        tableName
      );
      setToggle(false);
    }
  };

  const [isChecked, setIsChecked] = React.useState(todoList.fields.Done);
  const handleCheckBoxChange = async () => {
    setIsChecked(!isChecked);

    try {
      await requestEditCheck(tableName, todoList.id, {
        fields: {
          Done: !isChecked,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.listItem_container}>
      <li className={style.listItem}>
        <input
          className={style.checkbox}
          type="checkbox"
          onChange={() => handleCheckBoxChange()}
          checked={isChecked}
        />
        {isToggle ? (
          <form onSubmit={onSubmit} className={style.form}>
            <label htmlFor="editTodo"></label>
            <input
              id="editTodo"
              value={todoEditTitle || ""}
              onChange={onChangeEdit}
              className={style.edit_input}
            />
          </form>
        ) : (
          <p
            className={style.item_text}
            onClick={() => {
              setToggle(true);
            }}
            style={isChecked ? { textDecoration: "line-through" } : null}
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
              onRemoveTodo(todoList.id, tableName);
            }}
          />
        </div>
      </li>
    </div>
  );
};

TodoListItem.propTypes = {
  todoList: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  handleDescription: PropTypes.func,
  tableName: PropTypes.string,
  isChecked: PropTypes.bool,
};

export default TodoListItem;
