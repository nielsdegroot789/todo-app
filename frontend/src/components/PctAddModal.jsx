import React from 'react'
import PctModal from './PctModal'

const PctAddModal = ({ config }) => {
  return (
    <div>
      <PctModal title={`add ${name}`} visible={isToggled} onClose={toggle}></PctModal>
    </div>
  )
}

export default PctAddModal
