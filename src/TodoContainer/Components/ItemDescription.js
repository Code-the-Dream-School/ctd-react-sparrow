import React from "react";

function ItemDescription({
  todoList,
  itemDescription,
  tableId,
  setCurrentLink,
}) {
  console.log("item Description prop", itemDescription);
  console.log("tableId prop", tableId);
  console.log("Current Link prop", setCurrentLink);
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
