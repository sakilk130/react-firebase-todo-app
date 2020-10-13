import React from 'react';

function TodoList(props) {
  return (
    <div>
      <li key={props.todo}>{props.todo}</li>
    </div>
  );
}

export default TodoList;
