import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList'))
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
  return (
    <>
      <header>
        <h1>Todo List</h1>
        </header>
        <AddTodoForm onAddTodo={addTodo}/>

        <TodoList todoList={todoList} />
    </>
  );
}

export default App;
