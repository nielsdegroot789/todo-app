import React from 'react'

const PctSelect = ({ name, value, onChange, label, placeholder, options }) => {
  const internalOnChange = event => {
    onChange(name, event.target.value)
  }

  if (!options) {
    return null
  }

  return (
    <div className="input flex--space">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={internalOnChange}
        placeholder={placeholder}
        className="select"
      >
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default PctSelect
