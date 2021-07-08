import React, { useState } from 'react'
import PctInput from './PctInput'
import PctTextBox from './PctTextBox'
import PctDate from './PctDate'
import useAxios from '../hooks/useAxios'

// TODO: make sure useaxios gets rightky implemented
const AddEditTodoForm = () => {
  const [todo, setTodo] = useState({})

  //  ` const { response } = useAxios({
  //     method: 'post',
  //     data: todo,
  //     successMessage: 'Successfully added todo',
  //   })`

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
      <button>Add todo</button>
    </div>
  )
}

export default AddEditTodoForm
