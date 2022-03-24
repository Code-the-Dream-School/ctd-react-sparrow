import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log("index.js loads")
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
