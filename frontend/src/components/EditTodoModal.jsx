import React from 'react'
import useAxiosManual from '../hooks/useAxiosManual'
import PctModal from './PctModal'
import TodoForm from './TodoForm'

const EditTodoModal = ({ isVisible, onClose, todoId, refresh, onChange }) => {
  const { execute } = useAxiosManual({
    axiosConfig: { method: 'put', url: 'todos/edit', data: {} },
  })

  return (
    <PctModal isVisible={isVisible} onClose={onClose}>
      <TodoForm onClose={onClose} onChange={onChange} onSubmit={execute} />
    </PctModal>
  )
}

export default EditTodoModal
