import * as React from "react";

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Read React book" },
  { id: 3, title: "Watch React videos" },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <label htmlFor="search">Add: </label>
      <input id="search" type="text" />

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
