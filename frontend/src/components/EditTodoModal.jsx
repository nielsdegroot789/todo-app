import React from 'react'
import useAxiosManual from '../hooks/useAxiosManual'
import PctModal from './PctModal'
import TodoForm from './TodoForm'

const EditTodoModal = ({ isVisible, onClose, editTodo, onChange, refresh }) => {
  const { execute } = useAxiosManual({
    axiosConfig: {
      method: 'put',
      url: 'todos/update',
      data: editTodo,
    },
    successMessage: 'todo has been successfully edited',
    successFunction: () => {
      refresh()
      onClose()
    },
  })

  return (
    <PctModal isVisible={isVisible} onClose={onClose}>
      <TodoForm state={editTodo} onClose={onClose} onChange={onChange} onSubmit={execute} />
    </PctModal>
  )
}

export default EditTodoModal
