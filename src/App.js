// src/App.js
import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() { // Define the App component
  const [todos, setTodos] = useState([ // Initialize todos state with an array of todo objects
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Deploy to Heroku', completed: false }
  ]);

  const addTodo = (text) => { // Function to add a new todo to the todos state
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleTodo = (id) => { // Function to toggle the completion status of a todo
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Simple Todo App</h1>
      <AddTodo addTodo={addTodo} /> // Render the AddTodo component and pass addTodo function as a prop
      <TodoList todos={todos} toggleTodo={toggleTodo} /> // Render the TodoList component and pass todos state and toggleTodo function as props
    </div>
  );
}

export default App; // Export the App component
