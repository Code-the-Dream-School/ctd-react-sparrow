import React from 'react';
const toDoList = [
  {
    id: 0,
    title: "Sweep the floors"
  }, 
  {
    id: 1,
    title: "Read a book"
  }, 
  {
    id: 2,
    title: "Unload the dishwasher"
  }
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
     <h1>To Do List</h1>
     <ul>
       {toDoList.map(function(item) {
         return (
          <div key= {item.id}>
            <span>{item.title}</span>
          </div>)
       })}
     </ul>
    </div>
  );
}

export default App;
