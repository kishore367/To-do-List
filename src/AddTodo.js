// src/AddTodo.js
import React, { useState } from 'react';

function AddTodo({ addTodo }) { // Define the AddTodo component
  const [text, setText] = useState(''); // Initialize text state for the input field

  const handleChange = (event) => { // Function to handle changes in the input field
    setText(event.target.value); // Update the text state with the input value
  };

  const handleSubmit = (event) => { // Function to handle form submission
    event.preventDefault(); // Prevent the default form submission behavior
    if (!text.trim()) return; // If input field is empty or contains only whitespace, return
    addTodo(text); // Call the addTodo function passed as a prop with the input text
    setText(''); // Clear the input field by resetting the text state
  };

  return (
    <form onSubmit={handleSubmit}> // Form element with onSubmit event handler
      <input
        type="text"
        placeholder="Add new todo"
        value={text} // Bind the input field value to the text state
        onChange={handleChange} // Call the handleChange function when the input value changes
      />
      <button type="submit">Add</button> // Submit button to add a new todo
    </form>
  );
}

export default AddTodo; // Export the AddTodo component
