import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";
import { Typography } from "@material-ui/core";

const LOCAL_STORAGE_KEY = "current_item";

function App() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    // localStorage.removeItem(LOCAL_STORAGE_KEY);
    const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storage) {
      setItem(storage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);
  console.log("In App", items);

  function add2Form(item) {
    setItem([item, ...items]);
  }

  function deleteItem(itemName) {
    setItem(items.filter((item) => item.name !== itemName));
  }

  function toggleComplete(itemName) {
    setItem(
      items.map((item) => {
        if (item.name === itemName) {
          console.log("item: ", item.task);
          console.log("app toggle complete's completed: ", !item.completed);
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  return (
    <div className="App">
      <Typography variant="h2">TODO List</Typography>
      <TodoForm add2Form={add2Form} />
      <TodoList
        items={items}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
      ></TodoList>
    </div>
  );
}

export default App;
