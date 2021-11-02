import React from 'react'
import useAdd from '../hooks/useAdd'
import PctModal from './PctModal'

const PctAddModal = ({ title, visible, onClose, collection, form, addData }) => {
  const { executeAdd } = useAdd({
    addData,
    collection,
    title,
    successFunction: onClose,
  })

  return (
    <div>
      <PctModal title={`add ${title}`} visible={visible} onClose={onClose} onSubmit={executeAdd}>
        {form}
      </PctModal>
    </div>
  )
}

export default PctAddModal
