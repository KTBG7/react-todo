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
            <input type="checkbox" checked={todo.completed} />
            <li style={{
                textDecoration: todo.completed ? "line-through" : null
            }}>{todo.task}</li>
            <button onClick={handleRemoveClick}>X</button>
        </div>

    )
}

export default Todo
