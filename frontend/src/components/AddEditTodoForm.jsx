import React, { useState } from 'react'
import PctInput from './PctInput'
import PctTextBox from './PctTextBox'
import PctDate from './PctDate'
import useAxios from '../hooks/useAxios'

const AddEditTodoForm = ({ refresh }) => {
  const [todo, setTodo] = useState({})

  const axiosConfig = {
    method: 'post',
    url: 'todos/add',
    data: todo,
    successMessage: 'Successfully added todo',
  }

  const { execute } = useAxios({
    axiosConfig,
    manualCancel: true,
  })

  const onChange = (name, value) => {
    setTodo({ ...todo, [name]: value })
  }

  const submitTodo = async () => {
    await execute()
    await refresh()
  }

  return (
    <div className="addForm">
      <label for="name">Name:</label>
      <PctInput name="name" label="Todo name" value={todo?.name} onChange={onChange} />
      <PctTextBox
        name="description"
        label="Description"
        value={todo?.description}
        onChange={onChange}
      />
      <PctDate name="dueDate" label="Due date" value={todo?.date} onChange={onChange} />
      <button onClick={submitTodo}>Add todo</button>
    </div>
  )
}

export default AddEditTodoForm
