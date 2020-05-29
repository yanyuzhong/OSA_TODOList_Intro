import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function TodoForm({ add2Form }) {
  const [item, setItem] = useState({ name: "", task: "", completed: false });

  // function updateTodoForm(event) {
  //   setItem({ ...item, task: event.target.value });
  // }

  return (
    <form className={TodoForm.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Enter Todo Item"
        variant="outlined"
        value={item.task}
        onChange={(event) => setItem(...item, event.target.value)}
      />

      {/* <Button
        variant="contained"
        color="secondary"
        onClick={() => setItem([...items, currVal])}
      >
        Add to List
      </Button> */}
    </form>
  );
}

export default TodoForm;
