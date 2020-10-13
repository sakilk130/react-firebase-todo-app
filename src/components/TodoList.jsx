import React from 'react';
import './TodoList.css';
import { List, ListItem, ListItemText } from '@material-ui/core';

function TodoList(props) {
  return (
    <div>
      <List className="todo-list">
        <ListItem>
          {/* <ListItemAvatar>
           Avatar
          </ListItemAvatar> */}
          <ListItemText primary={props.todo} secondary="Date:13-10-2020" />
        </ListItem>
      </List>
      {/* <li key={props.todo}>{props.todo}</li> */}
    </div>
  );
}

export default TodoList;
