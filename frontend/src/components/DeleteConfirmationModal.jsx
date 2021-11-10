import React from 'react'
import PctModal from './PctModal'

const DeleteConfirmationModal = ({ title, method, onClose, visible }) => {
  return (
    <div>
      <PctModal
        onDelete={method}
        onClose={onClose}
        title={title || 'Are you sure you want to delete this?'}
        visible={visible}
      />
    </div>
  )
}

export default DeleteConfirmationModal
