// src/TodoItem.js
import React from 'react';

function TodoItem({ todo, toggleTodo }) { // Define the TodoItem component
  const handleToggle = () => {
    toggleTodo(todo.id); // Call the toggleTodo function when the checkbox is clicked
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed} // Set the checked state of the checkbox based on todo.completed
        onChange={handleToggle} // Call the handleToggle function when the checkbox state changes
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text} // Display the text of the todo item
      </span>
    </li>
  );
}

export default TodoItem; // Export the TodoItem component
