import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo App</p>
        <Form addTodo={addTodo} />
      </header>
    </div>

  )
}

export default App;
