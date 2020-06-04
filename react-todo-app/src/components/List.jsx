import React, { useState } from "react";


function MyList({ todos }) {
  const myList = <ul id="my-list"></ul>;
  return (
    <ul>
      {todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </ul>
  );
}

export default List;
