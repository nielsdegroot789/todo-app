import React from 'react'
import useAdd from '../hooks/useAxiosAdd'
import PctModal from './PctModal'
/* TODO: Is this the right way to make a modular select AddModal*/

const PctAddModal = ({ title, visible, form, config, successFunction, onClose }) => {
  const { executeAdd } = useAdd({
    data: config?.data,
    collection: config?.collection,
    title: config?.title,
    successFunction: res => {
      successFunction(res?.data)
      onClose()
    },
  })

  return (
    <div>
      <PctModal
        title={title ? `Create a new ${title}` : 'Create'}
        visible={visible}
        onSubmit={executeAdd}
        onClose={onClose}
      >
        {form}
      </PctModal>
    </div>
  )
}

export default PctAddModal
