import React from 'react'
import useAxiosManual from '../hooks/useAxiosManual'
import PctModal from './PctModal'
import StuffForm from './StuffForm'

const EditStuffModal = ({ visible, onClose, editStuff, onChange, refresh }) => {
  const { execute } = useAxiosManual({
    axiosConfig: {
      method: 'put',
      url: 'stuffs/update',
      data: editStuff,
    },
    successMessage: 'stuff has been successfully edited',
    successFunction: () => {
      refresh()
      onClose()
    },
  })

  const onSubmit = () => {
    execute()
    onClose()
  }

  return (
    <PctModal visible={visible} onClose={onClose}>
      <StuffForm state={editStuff} onClose={onClose} onChange={onChange} onSubmit={onSubmit} />
    </PctModal>
  )
}

export default EditStuffModal
