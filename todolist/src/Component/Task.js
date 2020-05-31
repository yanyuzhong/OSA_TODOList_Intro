import React from "react";

function Task({ item, toggleComplete }) {
  function handleComplete() {
    console.log("inside togglecomplete!");
    toggleComplete(item.name);
    console.log("curr item completed: ", item.completed);
  }
  console.log(item);
  console.log(item.completed);

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleComplete}></input>
      <li
        style={{
          color: "black",
          textDecoration: item.completed ? "line-through" : null,
        }}
      >
        {item.task}
      </li>
      <button>X</button>
    </div>
  );
}

export default Task;
