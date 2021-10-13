import React from 'react'
import PctInput from './PctInput'
import PctTextBox from './PctTextBox'

const StuffForm = ({ onSubmit, onChange, state }) => {
  return (
    <div className="form">
      <label htmlFor="name">Name:</label>
      <PctInput name="name" label="Stuff name" value={state?.name} onChange={onChange} />
      <PctTextBox
        name="description"
        label="Description"
        value={state?.description}
        onChange={onChange}
      />
      <button onClick={onSubmit}>{state?._id ? 'Edit stuff' : 'Add stuff'}</button>
    </div>
  )
}

export default StuffForm
