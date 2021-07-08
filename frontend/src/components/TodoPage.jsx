import React, { useEffect, useState } from 'react'
import AddEditTodoForm from './AddEditTodoForm'
import SearchBar from '../components/SearchBar'
import Todo from '../components/Todo'
import useAxios from '../hooks/useAxios'

const TodoPage = () => {
  const [filterText, setFilterText] = useState()
  const [todos, setTodos] = useState()
  // TODO: spinner
  const { response, loading, execute } = useAxios({
    method: 'get',
    url: 'todos/getTodos',
  })

  useEffect(() => {
    if (response) {
      setTodos(response)
    }
  }, [response])

  return (
    <div class="page-layout">
      <h1>Todos</h1>
      <SearchBar setFilterText={e => setFilterText(e)} />
      <AddEditTodoForm />
      <div id="todo-container">
        {loading ? <p>Loading...</p> : todos.map(todo => <Todo todo={todo} />)}
      </div>
    </div>
  )
}

export default TodoPage
