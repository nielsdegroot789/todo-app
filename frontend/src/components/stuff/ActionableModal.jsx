import React, { useState } from 'react'
import useDelete from '../../hooks/useDelete'
import useAdd from '../../hooks/useAdd'
import PctModal from '../PctModal'
import PctSelectAdd from '../PctSelectAdd'

const ActionableModal = ({ visible, onClose, refresh, stuffId }) => {
  const [isUnactionable, setIsUnactionable] = useState(false)
  const [somedayCategory, setSomedayCategory] = useState()

  const { executeDelete } = useDelete({
    _id: stuffId,
    title: 'stuff',
    collection: 'stuffs',
    successFunction: () => {
      refresh()
      onClose()
    },
  })

  const { executeAdd } = useAdd({ value: somedayCategory, collection: 'somedays' })

  return (
    <PctModal visible={visible} onClose={onClose}>
      {!isUnactionable && (
        <>
          <h3>Is it actionable?</h3>
          <button>Yes</button>
          <button onClick={() => setIsUnactionable(true)}>No</button>
        </>
      )}
      {isUnactionable && (
        <div className="flex--space">
          <div>
            <h3>Don&apos;t need it anymore</h3>
            <button onClick={executeDelete}>Trash</button>
          </div>
          <div>
            <h3>I might want to do this someday</h3>
            <div>
              <PctSelectAdd
                name="somedayCategory"
                onChange={(name, value) => console.log(name, value)}
                label="Category list"
                options={['hallo', 'test']}
                addTitle={somedayCategory}
                addOnChange={setSomedayCategory}
                addSubmit={executeAdd}
              />
              {/* TODO: make Icon buttons + icon integrations */}
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
