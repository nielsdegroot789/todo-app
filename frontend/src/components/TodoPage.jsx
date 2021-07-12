import React, { useEffect, useState } from 'react'
import AddEditTodoForm from './TodoForm'
import SearchBar from '../components/SearchBar'
import Todo from '../components/Todo'
import useAxios from '../hooks/useAxios'
import DeleteTodoModal from './DeleteTodoModal'
import useToggle from '../hooks/useToggle'
import TodoForm from './TodoForm'
import EditTodoModal from './EditTodoModal'

const TodoPage = () => {
  const [filterText, setFilterText] = useState()
  const [todos, setTodos] = useState()
  const [deleteId, setDeleteId] = useState()
  const [editId, setEditId] = useState()
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
      <TodoForm refresh={execute} />
      <div id="todo-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          todos.map(todo => <Todo todo={todo} setEditId={setEditId} setDeleteId={setDeleteId} />)
        )}
      </div>
      <EditTodoModal
        isVisible={editId}
        onClose={() => setEditId()}
        todoId={editId}
        refresh={execute}
      />
      <DeleteTodoModal
        isVisible={deleteId}
        onClose={() => setDeleteId(null)}
        todoId={deleteId}
        refresh={execute}
      />
    </div>
  )
}

export default TodoPage
