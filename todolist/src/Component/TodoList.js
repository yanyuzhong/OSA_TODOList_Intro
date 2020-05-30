import React from "react";
import Task from "./Task";

function TodoList({ items }) {
  return (
    <ul>
      {items.map((task) => (
        <Task key={task.id} task={task}></Task>
      ))}
    </ul>
  );
}

export default TodoList;
