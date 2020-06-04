import React, { useState } from "react";
import Buttonpad from "./Buttonpad";

function MyList(props) {
  const myList = <ul id="my-list"></ul>;
  return (
    <div className="my-list">
      <div>
        <label for="todo">Enter a task:</label>
        <input type="text" name="todo" id="todo"></input>
        <Buttonpad />
      </div>
      myList;
    </div>
  );
}

export default List;
