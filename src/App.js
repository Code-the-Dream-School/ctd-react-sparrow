import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
  );

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => (
    setTodoList([ ...todoList, newTodo ])
  );

  const removeTodo = (id) => {
    const newTodoList = todoList.filter(
      (TodoListItem) => id !== TodoListItem.id
    );
    setTodoList(newTodoList);
  };
  return (
    <>
      <header>
        <h1>Todo List</h1>
        </header>
        <AddTodoForm onAddTodo={addTodo}/>
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
