import React from 'react'
import PctInput from './PctInput'
import PctTextBox from './PctTextBox'
import PctDate from './PctDate'

const TodoForm = ({ onSubmit, onChange, state }) => {
  return (
    <div className="form">
      <label htmlFor="name">Name:</label>
      <PctInput name="name" label="Todo name" value={state?.name} onChange={onChange} />
      <PctTextBox
        name="description"
        label="Description"
        value={state?.description}
        onChange={onChange}
      />
      <PctDate name="dueDate" label="Due date" value={state?.dueDate} onChange={onChange} />
      <button onClick={onSubmit}>{state?._id ? 'Edit todo' : 'Add todo'}</button>
    </div>
  )
}

export default TodoForm
