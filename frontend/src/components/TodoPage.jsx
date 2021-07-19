import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Todo from '../components/Todo'
import DeleteTodoModal from './DeleteTodoModal'
import TodoForm from './TodoForm'
import EditTodoModal from './EditTodoModal'
import useAxiosInit from '../hooks/useAxiosInit'
import useAxiosManual from '../hooks/useAxiosManual'

const TodoPage = () => {
  const [filterText, setFilterText] = useState()
  const [todos, setTodos] = useState()
  const [todo, setTodo] = useState()
  const [deleteId, setDeleteId] = useState()
  const [editId, setEditId] = useState()
  // TODO: spinner
  const { response, loading, execute } = useAxiosInit({
    axiosConfig: { method: 'get', url: 'todos/getTodos' },
  })

  const { execute: addTodo } = useAxiosManual({
    axiosConfig: {
      method: 'post',
      url: 'todos/add',
      data: todo,
    },
    successMessage: 'Successfully added todo',
  })

  const { response: fetchedTodo, execute: fetchTodo } = useAxiosManual({
    axiosConfig: {
      method: 'get',
      url: 'todos/fetch',
      data: todo,
    },
  })
  useEffect(() => {
    if (response) {
      setTodos(response)
    }
  }, [response])
  // can be a lot cleaner!!
  useEffect(() => {
    if (editId) {
      fetchTodo()
      setTodo(fetchedTodo)
    }
  }, [editId])
  const onChange = (name, value) => {
    setTodo({ ...todo, [name]: value })
  }
  return (
    <div class="page-layout">
      <h1>Todos</h1>
      <SearchBar setFilterText={e => setFilterText(e)} />
      <TodoForm refresh={execute} onChange={onChange} onSubmit={addTodo} state={todo} />
      <div id="todo-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          todos?.map(todo => <Todo todo={todo} setEditId={setEditId} setDeleteId={setDeleteId} />)
        )}
      </div>
      <EditTodoModal
        isVisible={editId}
        onChange={onChange}
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
