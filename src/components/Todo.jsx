import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { CgPlayListAdd } from 'react-icons/cg';
import TodoList from './TodoList';
import DB from './db/firebase.js';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  // fetch data from firebase
  useEffect(() => {
    DB.collection('todos').onSnapshot((snapshot) => {
      // console.log(snapshot.docs.map((doc) => doc.data()));
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  //input onChange
  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };

  // button onClick
  const addTodos = (e) => {
    // console.log('object');

    //if empty....
    if (input === '') {
      e.preventDefault();
      console.log('Type Something ');
    } else {
      e.preventDefault();

      //insert into firebase
      DB.collection('todos').add({
        todo: input,
      });
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>
        Todo App <span>🔥</span>
      </h1>

      <form action="">
        {/* <input type="text" value={input} onChange={handleChange} /> */}
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
          <TodoList todo={todo} />
          // <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
