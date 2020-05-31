import React from "react";
import Task from "./Task";
import { List } from "@material-ui/core";

function TodoList({ items }) {
  return (
    <List>
      {items.map((item) => (
        <Task key={item.name} item={item} />
      ))}
    </List>
  );
}

export default TodoList;
