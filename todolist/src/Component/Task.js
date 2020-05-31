import React from "react";
import { Checkbox, ListItem, Typography, IconButton } from "@material-ui/core/";
import CancelIcon from "@material-ui/icons/Cancel";

function Task({ item, toggleComplete, deleteItem }) {
  function handleComplete() {
    console.log("inside togglecomplete!");
    toggleComplete(item.name);
    console.log("curr item completed: ", item.completed);
  }

  function handleDelete() {
    deleteItem(item.name);
  }
  console.log(item);
  console.log(item.completed);

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox
        checked={item.completed}
        label="Secondary"
        onClick={handleComplete}
      ></Checkbox>
      <Typography
        style={{
          color: "black",
          textDecoration: item.completed ? "line-through" : null,
        }}
      >
        {item.task}
      </Typography>
      <IconButton onClick={handleDelete}>
        <CancelIcon></CancelIcon>
      </IconButton>
    </ListItem>
  );
}

export default Task;
