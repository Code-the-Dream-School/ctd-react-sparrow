import React from "react";

function ItemDescription({ todoList, itemDescription }) {
  return (
    <>
      <ul>
        {todoList.map((todoList) => {
          if (todoList.id === itemDescription)
            return (
              <li key={todoList.id}>
                <textarea>{todoList.fields.Description}</textarea>
              </li>
            );
        })}
      </ul>
    </>
  );
}

export default ItemDescription;
