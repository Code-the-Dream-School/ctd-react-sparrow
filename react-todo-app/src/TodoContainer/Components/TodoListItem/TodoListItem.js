import React, { useState, useRef, useEffect } from "react";
import style from "./TodoListItem.module.css";
import { ReactComponent as XIcon } from "../IconsComponents/x.svg";
import { ReactComponent as NoteIcon } from "../IconsComponents/note.svg";
import PropTypes from "prop-types";
import { Tooltip, List, Checkbox, Input } from "antd";

// import { requestEditCheck } from "../../API";

const TodoListItem = ({
  todoList,
  onRemoveTodo,
  onEditTodo,
  handleDescription,
  tableName,
}) => {
  const [isToggle, setToggle] = useState(false);
  const [todoEditTitle, setTodoEditTitle] = useState(
    todoList.fields.Title || ""
  );
  const editInputRef = useRef(null);
  const listItemRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        listItemRef.current &&
        !listItemRef.current.contains(e.target) &&
        editInputRef.current !== e.target
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isChecked, setIsChecked] = useState(todoList.fields.Done);

  const handleCheckBoxChange = async () => {
    const done = !todoList.fields.Done;
    try {
      await onEditTodo(
        todoList.id,
        {
          fields: {
            Title: todoList.fields.Title,
            Description: todoList.fields.Description,
            Done: done,
          },
        },
        tableName
      );
      setIsChecked(done);
    } catch (error) {
      console.log(error);
    }
  };

  const handleListItemClick = () => {
    if (!isToggle) {
      setToggle(true);
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit(event);
    } else if (event.key === "Escape") {
      setTodoEditTitle(todoList.fields.Title);
      setToggle(false);
    }
  };

  return (
    <div className={style.listItem_container}>
      <List.Item
        className={style.listItem}
        onClick={handleListItemClick}
        ref={listItemRef}
      >
        <Checkbox
          className={style.checkbox}
          type="checkbox"
          onChange={() => handleCheckBoxChange()}
          checked={isChecked}
        />
        <div className={style.edit_container}>
          {isToggle ? (
            <form onSubmit={onSubmit} className={style.form}>
              <label htmlFor="editTodo"></label>
              <Tooltip title="Scroll Left to Right to Edit this Action, then hit Enter to Save It">
                <Input
                  id="editTodo"
                  value={todoEditTitle || ""}
                  onChange={onChangeEdit}
                  className={style.edit_input}
                  ref={editInputRef}
                  onKeyDown={handleInputKeyDown}
                  onBlur={() => setToggle(false)}
                  autofocus
                />
              </Tooltip>
            </form>
          ) : (
            <p
              className={style.item_text}
              style={
                isChecked
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {todoList.fields.Title}
            </p>
          )}
        </div>
        <div>
          <Tooltip title="Add Action Steps">
            <NoteIcon
              className={style.icons}
              onClick={() => handleDescription(todoList.id)}
            />
          </Tooltip>
          <Tooltip title="Delete Action">
            <XIcon
              className={style.icons}
              onClick={() => {
                onRemoveTodo(todoList.id, tableName);
              }}
            />
          </Tooltip>
        </div>
      </List.Item>
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
