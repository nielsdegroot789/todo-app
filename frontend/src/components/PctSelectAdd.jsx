import React from 'react'
import useToggle from '../hooks/useToggle'
import PctModal from './PctModal'
import PctSelect from './PctSelect'

const PctSelectAdd = ({
  name,
  value,
  onChange,
  label,
  placeholder,
  options,
  addTitle,
  addSubmit,
}) => {
  const [isToggled, toggle] = useToggle()

  return (
    <div className="flex">
      <PctModal
        title={`New ${addTitle}`}
        visible={isToggled}
        onClose={toggle}
        onSubmit={addSubmit}
      ></PctModal>

      <PctSelect
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
      />
      {addSubmit && <button onClick={toggle}>+</button>}
    </div>
  )
}

export default PctSelectAdd
