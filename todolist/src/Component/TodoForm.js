import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
// import uuid from "react-uuid";

var key = 0;

function TodoForm({ add2Form }) {
  const [item, setItem] = useState({ name: "", task: "", completed: false });

  // function updateTodoForm(event) {
  //   setItem({ ...item, task: event.target.value });
  // }

  function add2List(event) {
    event.preventDefault();
    // only add to the todo list when the task string is not empy
    if (item.task.trim()) {
      add2Form({ ...item, name: (key += 1) });
      setItem({ ...item, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={add2List}>
      <TextField
        id="outlined-basic"
        label="Enter Todo Item"
        type="text"
        variant="outlined"
        value={item.task}
        onChange={(event) => setItem({ ...item, task: event.target.value })}
      />

      <Button variant="contained" color="secondary" onSubmit={add2List}>
        Add to List
      </Button>
    </form>
  );
}

export default TodoForm;
