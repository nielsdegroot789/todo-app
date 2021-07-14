import React, { useState } from 'react'
import PctInput from './PctInput'
import PctTextBox from './PctTextBox'
import PctDate from './PctDate'

const TodoForm = ({ refresh, onSubmit, onChange, state }) => {
  return (
    <div className="form">
      <label for="name">Name:</label>
      <PctInput name="name" label="Todo name" value={state?.name} onChange={onChange} />
      <PctTextBox
        name="description"
        label="Description"
        value={state?.description}
        onChange={onChange}
      />
      <PctDate name="dueDate" label="Due date" value={state?.date} onChange={onChange} />
      {/* outside of component, perhaps hook? */}
      <button onClick={onSubmit}>Add todo</button>
    </div>
  )
}

export default TodoForm
