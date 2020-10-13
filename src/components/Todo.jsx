import React, { useState } from 'react';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };

  const addTodos = (e) => {
    // console.log('object');
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };
  return (
    <div>
      <h1>Todo App🔥</h1>
      <form action="">
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={addTodos} type="submit">
          +Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
