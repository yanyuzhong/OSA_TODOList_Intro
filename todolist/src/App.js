import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import TextField from "@material-ui/core/TextField";
// import { Button } from "@material-ui/core";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";

function App() {
  const [items, setItem] = useState([]);
  console.log(items);

  function add2Form(item) {
    setItem([item, ...items]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>TODO List</div>
        <img src={logo} className="App-logo" alt="logo" />
        <TodoForm add2Form={add2Form}></TodoForm>
        <TodoList items={items}></TodoList>
        {/* <form className={App.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Enter Todo Item"
            variant="outlined"
            onChange={(event) => setCurrVal(event.target.value)}
          />

          <Button
            variant="contained"
            color="secondary"
            onClick={() => setItem([...items, currVal])}
          >
            Add to List
          </Button>
        </form> */}
      </header>
    </div>
  );
}

export default App;
