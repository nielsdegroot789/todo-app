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
  addSubmit,
  form,
  addData,
}) => {
  const [isToggled, toggle] = useToggle()

  return (
    <div className="flex">
      <PctAddModal
        title={`New ${addTitle}`}
        addData={addData}
        visible={isToggled}
        onClose={toggle}
        onSubmit={addSubmit}
        form={form}
      />

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
