import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from "./TodoListItem"

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

export default function TodoList() {
    return(
        <ul>
          {todoList.map((todo)=> {
            return( <TodoListItem key={todo.id} todo={todo}/>
           
            );
          })}
        </ul>
    
    );
}
