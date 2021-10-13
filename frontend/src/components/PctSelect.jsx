import React from 'react'

const PctSelect = ({ name, value, onChange, label, placeholder, options }) => {
  const internalOnChange = event => {
    onChange(name, event.target.value)
  }
  return (
    <div className="input flex--space">
      <label for={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={internalOnChange}
        placeholder={placeholder}
        className="select"
      >
        {options.map(option => {
          return <option value={option}>{option}</option>
        })}
      </select>
    </div>
  )
}

export default PctSelect
