import React from 'react';
import TodoListItem from './TodoListItem';

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

const TodoList = () => (
        <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))};

      </ul>
    );

export default TodoList;