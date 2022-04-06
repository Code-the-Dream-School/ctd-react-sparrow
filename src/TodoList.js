import React from 'react';

let todoList = [ {
    id: 1,
    title: "Complete Assignment",
  }, 
  {
    id: 2,
    title: "Clean Room",
  },
  {
    id: 3,
    title: "Do Taxes",
  }];

function TodoList() {
    return (
        <ul>
        {todoList.map(todoList => (<li key = {todoList.id}>{todoList.title}</li>))};

      </ul>
    );
}

export default TodoList;