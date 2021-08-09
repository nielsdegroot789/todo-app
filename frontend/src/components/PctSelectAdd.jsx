import React, { useState } from 'react'
import useToggle from '../hooks/useToggle'
import PctModal from './PctModal'
import PctSelect from './PctSelect'

const PctSelectAdd = ({ name, value, onChange, label, placeholder, options }) => {
  const [isToggled, toggle] = useToggle()
  console.log(isToggled)
  return (
    <div className="flex">
      <PctModal title={`add ${name}`} visible={isToggled} onClose={toggle}></PctModal>
      <PctSelect
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
      />
      <button onClick={toggle}>+</button>
    </div>
  )
}

export default PctSelectAdd
