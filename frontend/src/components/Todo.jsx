import React, { useState } from 'react'
import useToggle from '../hooks/useToggle'

const Todo = ({ todo, setEditId, setDeleteId }) => {
  return (
    <div id="todo-item-container">
      <h4>{todo?.name}</h4>
      <h4>{todo?.description}</h4>
      <h4>{todo?.date}</h4>
      <button onClick={() => setDeleteId(todo._id)}>Delete todo</button>
      <button onClick={() => setEditId(todo._id)}>Edit todo</button>
    </div>
  )
}

export default Todo
