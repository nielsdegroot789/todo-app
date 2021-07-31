import React from 'react'

const PctDate = ({ name, value, onChange, label }) => {
  const toDateString = value => {
    if (!value) {
      return null
    }
    return value.substring(0, 10)
  }
  return (
    <>
      {label && (
        <label for={name} className="input">
          {label}
        </label>
      )}
      <input
        name={name}
        value={toDateString(value)}
        onChange={event => {
          onChange(name, event.target.value)
        }}
        type="date"
        class=" input inputDate"
      />
    </>
  )
}

export default PctDate
