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
  const [editTodo, setEditTodo] = useState()
  const [deleteId, setDeleteId] = useState()
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

  useEffect(() => {
    if (response) {
      setTodos(response)
    }
  }, [response])

  const onChangeEdit = (name, value) => {
    setTodos({ ...todo, [name]: value })
  }
  return (
    <div class="page-layout">
      <h1>Todos</h1>
      <SearchBar setFilterText={e => setFilterText(e)} />
      <TodoForm refresh={execute} onSubmit={addTodo} state={todo} />
      <div id="todo-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          todos?.map(todo => (
            <Todo todo={todo} setEditTodo={setEditTodo} setDeleteId={setDeleteId} />
          ))
        )}
      </div>
      <EditTodoModal
        isVisible={editTodo}
        onClose={() => setEditTodo(null)}
        editTodo={editTodo}
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
