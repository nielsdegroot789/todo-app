import React from 'react'
import useAxios from '../hooks/useAxios'
import PctModal from './PctModal'

const DeleteTodoModal = ({ isVisible, onClose, todoId, refresh }) => {
  const { execute } = useAxios({
    axiosConfig: {
      method: 'delete',
      url: 'todos/delete',
      data: { _id: todoId },
    },
    successMessage: 'Todo successfully deleted',
    successFunction: () => {
      refresh()
      onClose()
    },
    manualCancel: true,
  })

  return (
    <PctModal
      title="Delete todo"
      isVisible={isVisible}
      onClose={onClose}
      extra={<button onClick={execute}>Delete todo</button>}
    >
      <p>Are you sure you want to delete this todo?</p>
    </PctModal>
  )
}

export default DeleteTodoModal
