import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const Appbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#2196f3" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <PlaylistAddIcon />
        </IconButton>
        <Typography variant="h6">Todo List</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
