import React from 'react';
import ReactDom from 'react-dom';

const toDoListArray = [
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
    },
    {
      id: 3,
      title: "Walk the dog"
    }
];

function ToDoList() {
    return (
        <ul>
            {toDoListArray.map(function (item) {
                return (
                    <div key={item.id}>
                        <span>{item.title}</span>
                    </div>);
            })}
        </ul>
    );

}
export default ToDoList;