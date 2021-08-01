import React from 'react'
import PctInput from './PctInput'
import PctTextBox from './PctTextBox'
import PctDate from './PctDate'

const StuffForm = ({ onSubmit, onChange, state }) => {
  return (
    <div className="form">
      <label for="name">Name:</label>
      <PctInput name="name" label="Stuff name" value={state?.name} onChange={onChange} />
      <PctTextBox
        name="description"
        label="Description"
        value={state?.description}
        onChange={onChange}
      />
      <PctDate name="dueDate" label="Due date" value={state?.dueDate} onChange={onChange} />
      <button onClick={onSubmit}>{state?._id ? 'Edit stuff' : 'Add stuff'}</button>
    </div>
  )
}

export default StuffForm
