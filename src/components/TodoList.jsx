import React from "react";
import { useTodoContext } from "../context/context";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  Typography,
} from "@material-ui/core";

import "../app.css";

import FormatListBulletedSharpIcon from "@material-ui/icons/FormatListBulletedSharp";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const TodoList = ({ handleInput }) => {
  const [{ todoList: td }, dispatch] = useTodoContext();
  const todoList = JSON.parse(localStorage.getItem("todo")) || [];

  const deleteTodo = (id) => {
    // console.log(`Deleted todo with id: ${id}`);
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const onEditButtonClicked = (id) => {
    const toBeEditedTodo = todoList.filter((todo) => {
      return todo.id === id;
    });

    handleInput(toBeEditedTodo);
  };

  return (
    <section>
      {todoList.length <= 0 ? (
        <>
          <Typography variant="h5" className="app_heading">
            There is nothing in your todo. Add some todos
          </Typography>
        </>
      ) : (
        <div className="list">
          <Grid item xs={12}>
            {todoList.map((todo) => (
              <List key={todo.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FormatListBulletedSharpIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={todo.data} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => onEditButtonClicked(todo.id)}
                    >
                      <EditIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            ))}
          </Grid>
        </div>
      )}
    </section>
  );
};

export default TodoList;
