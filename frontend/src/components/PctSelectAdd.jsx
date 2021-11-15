import React from 'react'
import useToggle from '../hooks/useToggle'
import PctAddModal from './PctAddModal'
import PctSelect from './PctSelect'

const PctSelectAdd = ({
  name,
  value,
  onChange,
  label,
  placeholder,
  options,
  addTitle,
  addForm,
  successFunction,
  config,
}) => {
  const [isToggled, toggle] = useToggle()

  return (
    <div className="flex">
      <PctAddModal
        title={addTitle}
        visible={isToggled}
        onClose={toggle}
        form={addForm}
        config={config}
        successFunction={successFunction}
      />

      <PctSelect
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
      />
      {config && <button onClick={toggle}>+</button>}
    </div>
  )
}

export default PctSelectAdd
