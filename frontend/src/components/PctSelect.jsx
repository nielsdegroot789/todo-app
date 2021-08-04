import React from 'react'

const PctSelect = ({ name, value, onChange, options }) => {
  const internalOnChange = event => {
    onChange(name, event.target.value)
  }
  return (
    <div>
      <select name={name} value={value} onChange={internalOnChange}>
        {options.map(option => {
          return <option value={option}>{option}</option>
        })}
      </select>
    </div>
  )
}

export default PctSelect
