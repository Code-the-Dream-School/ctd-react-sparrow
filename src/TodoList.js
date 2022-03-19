import React from 'react';

/* an array with 3 objects that have 2 properties: id and title */
const todoList = [
    {
      id:1, 
      title: "first"
    },
    {
      id:2, 
      title: "second"},
    {
      id:3,
      title:"third"
    }
  ]

/* 
  a functional component that maps through an array of data
  and renders specific values to back to the DOM
*/
function TodoList() {
  return(
    <>
      <ul>
      {/* maps over the array, the key attribute uses the object id */}
      {todoList.map((item) => {
        return(
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        )
      })}
      </ul>
    </>
    )
  }

export default TodoList;