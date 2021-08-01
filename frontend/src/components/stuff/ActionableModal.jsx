import React, { useState } from 'react'
import DeleteStuffModal from '../DeleteStuffModal'
import PctModal from '../PctModal'

const ActionableModal = ({ isVisible, onClose, refresh, stuffId }) => {
  const [isUnactionable, setIsUnactionable] = useState(false)
  const [deleteId, setDeleteId] = useState()

  return (
    <PctModal isVisible={isVisible} onClose={onClose}>
      {!isUnactionable && (
        <>
          <h3>Is it actionable?</h3>
          <button>Yes</button>
          <button onClick={() => setIsUnactionable(true)}>No</button>
        </>
      )}
      {isUnactionable && (
        <div className="flex-container">
          <div>
            <h3>Is it longer needed?</h3>
            <button onClick={() => setDeleteId(stuffId)}>Trash</button>
          </div>
          <div>
            <h3>No action is needed now, but something might need to be done later</h3>
            <button>Incubate</button>
          </div>
          <div>
            <h3>
              The item is potentially useful information that might be needed for something later{' '}
            </h3>
            <button>Reference</button>
          </div>
        </div>
      )}
      <DeleteStuffModal
        isVisible={deleteId}
        onClose={() => setDeleteId(null)}
        todoId={deleteId}
        refresh={() => {
          refresh()
          onClose()
        }}
      />
    </PctModal>
  )
}

export default ActionableModal
