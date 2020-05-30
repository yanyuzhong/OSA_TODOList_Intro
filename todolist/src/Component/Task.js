import React from "react";

function Task({ item }) {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox"></input>
      <li
        style={{
          color: "white",
          textDecoration: item.completed ? "line-through" : null,
        }}
      >
        item.task
      </li>
      <button>X</button>
    </div>
  );
}

export default Task;
