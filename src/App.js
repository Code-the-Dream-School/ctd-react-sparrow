import React from 'react';

const todoList = [
  {
    id: 1,
    title: 'Setup the IDE'
  },
  {
    id: 2,
    title: 'Create a new folder'
  },
  {
    id: 3,
    title:'Initiate the new React App'
  },
  {
    id: 4,
    title: 'Start working'
  },
  {
    id: 5,
    title: 'Have fun!'
  }
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
        return (
          <li key={item.id}>
            {item.title}
            </li>
        )
        })}
      </ul>
    </div>
  );
}

export default App;
