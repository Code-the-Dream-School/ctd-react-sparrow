import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import PropTypes from "prop-types";

//This component renders the entire list
const TodoList = ({
  todoList,
  onRemoveTodo,
  onEditTodo,
  handleDescription,
  tableName,
  searchTerm,
  handleCheckBox,
}) => {
  const filteredList = todoList.filter((items) => {
    return items.fields.Title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      {filteredList.map((todoList) => {
        return (
          <TodoListItem
            key={todoList.id}
            todoList={todoList}
            onRemoveTodo={onRemoveTodo}
            onEditTodo={onEditTodo}
            handleDescription={handleDescription}
            tableName={tableName}
            handleCheckBox={handleCheckBox}
          />
        );
      })}
    </>
  );
};

TodoList.propType = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  handleDescription: PropTypes.func,
  tableName: PropTypes.string,
};

export default TodoList;
