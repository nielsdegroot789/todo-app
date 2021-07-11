import React, { useState } from 'react'
import useToggle from '../hooks/useToggle'

const Todo = ({ todo, setTodoId }) => {
  return (
    <div id="todo-item-container">
      <h4>{todo?.name}</h4>
      <h4>{todo?.description}</h4>
      <h4>{todo?.date}</h4>
      <button onClick={() => setTodoId(todo._id)}>delete todo</button>
    </div>
  )
}

export default Todo
