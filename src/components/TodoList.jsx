import React from 'react';
import './TodoList.css';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Modal,
} from '@material-ui/core';
import { RiDeleteBin6Line } from 'react-icons/ri';
import DB from './db/firebase';
import { useState } from 'react';
import firebase from 'firebase';

// Update popup style
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TodoList(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  // delete from firebase
  const deleteTodo = () => {
    DB.collection('todos').doc(props.todo.id).delete();
  };

  // Modal close
  const handleClose = () => {
    setOpen(false);
  };

  // update todo from firebase
  const updateTodo = () => {
    DB.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <input
            type="text"
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={updateTodo}>edit</button>
        </div>
      </Modal>
      <List className="todo-list">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary={props.todo.time} />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit </button>
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
    </div>
  );
}

export default TodoList;
