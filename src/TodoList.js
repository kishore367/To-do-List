// src/TodoList.js
import React from 'react';
import TodoItem from './TodoItem'; // Import the TodoItem component

function TodoList({ todos, toggleTodo }) { // Define the TodoList component
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => ( // Map over the todos array to render each TodoItem
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList; // Export the TodoList component
