import React from 'react'
import useAdd from '../hooks/useAdd'
import PctModal from './PctModal'
/* TODO: Is this the right way to make a modular select AddModal*/

const PctAddModal = ({ title, visible, onClose, form, config }) => {
  const { executeAdd } = useAdd({
    data: config?.data,
    collection: config?.collection,
    title: config?.title,
    successFunction: onClose,
  })

  console.log(config?.data)
  return (
    <div>
      <PctModal title={`add ${title}`} visible={visible} onClose={onClose} onSubmit={executeAdd}>
        {form}
      </PctModal>
    </div>
  )
}

export default PctAddModal
