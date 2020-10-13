import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { CgPlayListAdd } from 'react-icons/cg';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  //input onChange
  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };

  // button onClick
  const addTodos = (e) => {
    // console.log('object');

    if (input === '') {
      e.preventDefault();
      console.log('Type Something ');
    } else {
      e.preventDefault();
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Todo App🔥</h1>

      <form action="">
        {/* <input type="text" /> */}
        <TextField
          label="Add Todos..."
          type="text"
          variant="outlined"
          value={input}
          onChange={handleChange}
        />
        <Button
          onClick={addTodos}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={!input}
        >
          <CgPlayListAdd /> Add
        </Button>
        {/* <button onClick={addTodos} type="submit">
          +Add
        </button> */}
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
