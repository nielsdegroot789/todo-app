import React, { useState } from 'react'
import useDelete from '../../hooks/useDelete'
import PctModal from '../PctModal'
import PctSelect from '../PctSelect'

const ActionableModal = ({ isVisible, onClose, refresh, stuffId }) => {
  const [isUnactionable, setIsUnactionable] = useState(false)

  const { executeDelete } = useDelete({
    _id: stuffId,
    title: 'stuff',
    collection: 'stuffs',
    successFunction: () => {
      refresh()
      onClose()
    },
  })

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
            <h3>Don't need it anymore</h3>
            <button onClick={executeDelete}>Trash</button>
          </div>
          <div>
            <h3>I might want to do this someday</h3>
            <div>
              <PctSelect
                name="somedayCategory"
                options={['hallo', 'test']}
                onChange={(name, value) => console.log(name, value)}
              />
              {/* TODO: make Icon buttons + icon integrations */}
              <button>+</button>
            </div>
            <button>Add to someday list</button>
          </div>
          <div>
            <h3>potentially useful information</h3>
            <button>Reference</button>
          </div>
        </div>
      )}
    </PctModal>
  )
}

export default ActionableModal
