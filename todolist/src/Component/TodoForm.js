import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { v4 as uuid } from "uuid";

function TodoForm({ add2Form }) {
  const [item, setItem] = useState({ name: "", task: "", completed: false });

  // function updateTodoForm(event) {
  //   setItem({ ...item, task: event.target.value });
  // }

  function add2List(event) {
    // only add to the todo list when the task string is not empy
    if (item.task.trim()) {
      add2Form({ ...item, name: uuid.v4() });
      setItem({ ...item, task: "" });
    }
  }

  return (
    <form onSubmit={add2List}>
      <TextField
        id="outlined-basic"
        label="Enter Todo Item"
        variant="outlined"
        value={item.task}
        onChange={(event) => setItem({ ...item, task: event.target.value })}
      />

      <Button variant="contained" color="secondary" tye="submit">
        Add to List
      </Button>
    </form>
  );
}

export default TodoForm;
