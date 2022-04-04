import React from "react";

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Read React book" },
  { id: 3, title: "Watch React videos" },
];

function TodoList() {
  return (
    <div>
      <hr />

      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
