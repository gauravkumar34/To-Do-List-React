import React, { useState } from "react";
import ToDoList from "./todolist";

function App() {
  const [note, setNote] = useState("");
  const [items, setItem] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;

    setNote(newValue);
  }

  function addEd(event) {
    setItem((prevItem) => {
      return [...prevItem, note];
    });
    setNote("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={note} />
        <button onClick={addEd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoList text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
