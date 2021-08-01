import React from 'react'
import useAxiosManual from '../hooks/useAxiosManual'
import PctModal from './PctModal'

const DeleteStuffModal = ({ isVisible, onClose, todoId, refresh }) => {
  const { execute } = useAxiosManual({
    axiosConfig: {
      method: 'delete',
      url: 'stuffs/delete',
      data: { _id: todoId },
    },
    successMessage: 'Stuff successfully deleted',
    successFunction: () => {
      refresh()
      onClose()
    },
  })
  console.log(todoId)
  return (
    <PctModal
      title="Delete stuff"
      isVisible={isVisible}
      onClose={onClose}
      extra={<button onClick={execute}>Delete stuff</button>}
    >
      <p>Are you sure you want to delete this stuff?</p>
    </PctModal>
  )
}

export default DeleteStuffModal
