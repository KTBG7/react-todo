import React, { useState } from "react";
import Todo from "./Todo";


function MyList({ todos, toggleComplete, removeTodo }) {
  return (
    <ul className="todo-list"
      style={{ visibility: todos.length ? "visible" : "hidden" }}>
      {todos.map(todo => (
        <div>
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        </div>
      ))}
    </ul>
  );
}

export default MyList;
