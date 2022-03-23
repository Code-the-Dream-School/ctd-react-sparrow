import React from 'react';

const todoList = [
  { id:1,
    title: "complete assignment"
  },
  { id:2,
    title: "walk dog"
  },
  { id:3,
    title: "feed cat"
  }
];

function App() {
  return (
    <div>
      <h1> Todo List</h1>
      <ul>
        {todoList.map( (task)=> {
          return(
            <li key={task.id}>{task.title} </li>
          );
        })}
      </ul>
     
    </div> 
  );
}
export default App;
