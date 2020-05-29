import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>TODO List</div>
        <img src={logo} className="App-logo" alt="logo" />
        <form className={App.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Enter Todo Item"
            variant="outlined"
          />
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
