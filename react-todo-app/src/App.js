import * as React from "react";

const todoList = [
  {
    title: "Complete assignment",
    id: 1,
  },
  {
    title: "Read React book",
    id: 2,
  },
  {
    title: "Watch React videos",
    id: 3,
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <label htmlFor="add">Add Task: </label>
      <input id="add" type="text" />

      <hr />

      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
