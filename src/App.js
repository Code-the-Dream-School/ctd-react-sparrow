import React from 'react';
let todoList = [ {
  id: 1,
  title: "Complete Assignment",
}, 
{
  id: 2,
  title: "Clean Room",
}];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>Todo List</h1>
        </header>
        <ul>
          {todoList.map(function (item) {
          return <li key = {item.id}>{item.title}</li>;
        })
        }
        </ul>
    </div>
  );
}

export default App;
