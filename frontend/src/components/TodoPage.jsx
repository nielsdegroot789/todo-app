import React, { useState } from 'react'
import AddEditTodoForm from './AddEditTodoForm'
import SearchBar from '../components/SearchBar'
import axios from 'axios'

const TodoPage = () => {
  const [filterText, setFilterText] = useState()
  const [todos, setTodos] = useState()

  const getTodos = async () => {
    const todos = await axios.get('todos/getTodos')
    if (todos?.data) {
      setTodos(todos.data)
    }
  }

  if (!todos) {
    getTodos()
  }

  return (
    <div id="todoPage">
      <h1>Todos</h1>
      <SearchBar setFilterText={e => setFilterText(e)} />
      <AddEditTodoForm />
      {/* {todos.map((todo) => (
        <h2>{todo}</h2>
      ))} */}
    </div>
  )
}

export default TodoPage
