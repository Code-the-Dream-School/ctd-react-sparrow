import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';

function App() {
  const [todoList, setTodoList] = React.useState(
    []
  );

  const [isLoading, setIsLoading] = React.useState(true);  

  React.useEffect(() => {

    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve({ data: {todoList: JSON.parse(localStorage.getItem('savedTodoList')) || []}}),
        2000
      )
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  React.useEffect(() => {

    if (isLoading === false) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }
}, [todoList]);

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
        {isLoading ? (<p>Loading...</p>) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}       
    </>
  );
}

export default App;
