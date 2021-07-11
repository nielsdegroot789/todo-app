import React, { useEffect, useState } from 'react'
import AddEditTodoForm from './AddEditTodoForm'
import SearchBar from '../components/SearchBar'
import Todo from '../components/Todo'
import useAxios from '../hooks/useAxios'
import DeleteTodoModal from './DeleteTodoModal'
import useToggle from '../hooks/useToggle'

const TodoPage = () => {
  const [filterText, setFilterText] = useState()
  const [todos, setTodos] = useState()
  const [todoId, setTodoId] = useState()
  // TODO: spinner
  const { response, loading, execute } = useAxios({
    axiosConfig: { method: 'get', url: 'todos/getTodos' },
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
      <AddEditTodoForm refresh={execute} />
      <div id="todo-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          todos.map(todo => <Todo todo={todo} setTodoId={setTodoId} />)
        )}
      </div>
      <DeleteTodoModal
        isVisible={todoId}
        onClose={() => setTodoId(null)}
        todoId={todoId}
        refresh={execute}
      />
    </div>
  )
}

export default TodoPage
