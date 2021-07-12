import React from 'react'
import useAxios from '../hooks/useAxios'
import PctModal from './PctModal'
import TodoForm from './TodoForm'

const EditTodoModal = ({ isVisible, onClose, todoId, refresh }) => {
  const { execute } = useAxios({
    method: 'put',
    url: 'todos/edit',
    data: {},
  })
  return (
    <PctModal isVisible={isVisible} onClose={onClose}>
      <TodoForm />
    </PctModal>
  )
}

export default EditTodoModal
