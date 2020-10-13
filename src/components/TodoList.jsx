import React from 'react';
import './TodoList.css';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { RiDeleteBin6Line } from 'react-icons/ri';
import DB from './db/firebase';

function TodoList(props) {
  const deleteTodo = () => {
    DB.collection('todos').doc(props.todo.id).delete();
  };
  return (
    <div>
      <List className="todo-list">
        <ListItem>
          {/* <ListItemAvatar>
           Avatar
          </ListItemAvatar> */}
          <ListItemText primary={props.todo.todo} secondary="Date:13-10-2020" />
        </ListItem>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={deleteTodo}
        >
          <RiDeleteBin6Line />
          <span>Remove</span>
        </Button>
      </List>
      {/* <li key={props.todo}>{props.todo}</li> */}
    </div>
  );
}

export default TodoList;
