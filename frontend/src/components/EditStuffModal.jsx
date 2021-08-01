import React from 'react'
import useAxiosManual from '../hooks/useAxiosManual'
import PctModal from './PctModal'
import StuffForm from './StuffForm'

const EditStuffModal = ({ isVisible, onClose, editStuff, onChange, refresh }) => {
  const { execute } = useAxiosManual({
    axiosConfig: {
      method: 'put',
      url: 'todos/update',
      data: editStuff,
    },
    successMessage: 'stuff has been successfully edited',
    successFunction: () => {
      refresh()
      onClose()
    },
  })

  return (
    <PctModal isVisible={isVisible} onClose={onClose}>
      <StuffForm state={editStuff} onClose={onClose} onChange={onChange} onSubmit={execute} />
    </PctModal>
  )
}

export default EditStuffModal
