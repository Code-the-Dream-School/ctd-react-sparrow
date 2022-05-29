import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [todoList, setTodoList] = React.useState(
    []
  );

  const [isLoading, setIsLoading] = React.useState(true);  

  React.useEffect(() => {

    const response = fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }).then((response) => response.json()).then((result) => {
      setTodoList(result.records);
      setIsLoading(false);
    });
 }, []);

  React.useEffect(() => {

    if (!isLoading) {
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
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <>
          <header>
              <h1>Todo List</h1>
            </header>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? (<p>Loading...</p>) : (
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}
              </>
          }/>
          <Route path="/new" element={
            <header>
              <h1>New Todo List</h1>
            </header>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
