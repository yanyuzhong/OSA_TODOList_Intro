import React from "react";
import Task from "./Task";
import { List } from "@material-ui/core";

function TodoList({ items, toggleComplete, deleteItem }) {
  return (
    <List>
      {items.map((item) => (
        <Task
          key={item.name}
          item={item}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
        />
      ))}
    </List>
  );
}

export default TodoList;
