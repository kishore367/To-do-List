// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Import your CSS file for styling
import App from './App';
import './AddTodo';
import './TodoItem';
import './TodoList';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
