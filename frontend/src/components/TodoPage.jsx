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
  const [todo, setTodo] = useState({})
  const [editTodo, setEditTodo] = useState()
  const [deleteId, setDeleteId] = useState()
  // TODO: spinner
  const { response, loading, refresh } = useAxiosInit({
    axiosConfig: { method: 'get', url: 'todos/getTodos' },
  })

  const { execute: addTodo } = useAxiosManual({
    axiosConfig: {
      method: 'post',
      url: 'todos/add',
      data: todo,
    },
    successMessage: 'Successfully added todo',
    successFunction: refresh,
  })

  useEffect(() => {
    if (response) {
      setTodos(response)
    }
  }, [response])

  const onChangeTodo = (name, value) => {
    setTodo({ ...todo, [name]: value })
  }

  const onChangeEditTodo = (name, value) => {
    setEditTodo({ ...editTodo, [name]: value })
  }
  console.log(editTodo)
  return (
    <div class="page-layout">
      <h1>Todos</h1>
      <SearchBar setFilterText={e => setFilterText(e)} />
      <TodoForm onSubmit={addTodo} state={todo} onChange={onChangeTodo} />
      <div id="todo-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          todos?.map(todo => (
            <Todo todo={todo} key={todo._id} setEditTodo={setEditTodo} setDeleteId={setDeleteId} />
          ))
        )}
      </div>
      <EditTodoModal
        isVisible={editTodo}
        onClose={() => setEditTodo(null)}
        editTodo={editTodo}
        refresh={refresh}
        onChange={onChangeEditTodo}
      />
      <DeleteTodoModal
        isVisible={deleteId}
        onClose={() => setDeleteId(null)}
        todoId={deleteId}
        refresh={refresh}
      />
    </div>
  )
}

export default TodoPage
