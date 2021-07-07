import React, { useState } from 'react'
import PctInput from './PctInput'
import PctTextBox from './PctTextBox'
import PctDate from './PctDate'

import axios from 'axios'
import useNotify from '../hooks/useNotify'

const AddEditTodoForm = () => {
  const [todo, setTodo] = useState({})
  const notify = useNotify()

  const submitTodo = async () => {
    console.log(todo)
    const res = await axios.post('http://localhost:5000/todos/add', todo)
    if (res) {
      notify({ title: 'Todo successfully added' })
    }
  }

  const onChange = (name, value) => {
    setTodo({ ...todo, [name]: value })
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
