import React, { useState } from 'react'

function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }
    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    return (
        <div id="todo">
            <label className="checkbox-label">
                <input type="checkbox" checked={todo.completed} />
                <span className="checkbox-c" onClick={handleCheckboxClick}></span>
            </label>

            <li style={{
                textDecoration: todo.completed ? "line-through" : null
            }}>{todo.task}</li>
            <button onClick={handleRemoveClick}>X</button>

        </div>

    );
}

export default Todo
