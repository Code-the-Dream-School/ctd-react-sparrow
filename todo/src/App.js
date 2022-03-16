import './App.css';

const todoList = [{
  id: 1,
  title: 'Learn React',
}, {
  id: 2,
  title: 'Learn Redux',
}, {
  id: 3,
  title: 'Learn React Router',
}];

function App() {
  return (
    <div className="App">
    <h1>Todo List</h1>
    <ul>
    {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
    </div>
  );
}

export default App;
