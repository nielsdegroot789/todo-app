import React from 'react'

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div id="todo-item-container">
      <h4>{todo?.name}</h4>
      <h4>{todo?.description}</h4>
      <h4>{todo?.date}</h4>
      <button onClick={deleteTodo}>Delete todo</button>
    </div>
  )
}

export default Todo
