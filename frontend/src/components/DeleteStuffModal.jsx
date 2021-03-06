import React from 'react'
import useDelete from '../hooks/useDelete'
import PctModal from './PctModal'

const DeleteStuffModal = ({ visible, onClose, todoId, refresh }) => {
  const { executeDelete } = useDelete({
    _id: todoId,
    title: 'stuff',
    collection: 'stuffs',
    successFunction: () => {
      refresh()
      onClose()
    },
  })

  return (
    <PctModal
      title="Delete stuff"
      visible={visible}
      onClose={onClose}
      extra={<button onClick={executeDelete}>Delete stuff</button>}
    >
      <p>Are you sure you want to delete this stuff?</p>
    </PctModal>
  )
}

export default DeleteStuffModal
