import React, { useEffect, useState } from 'react'
import useAxiosInit from '../../hooks/useAxiosInit'
import useDelete from '../../hooks/useDelete'
import PctModal from '../PctModal'
import SelectAddCategory from './SelectAddCategory'

/* TODO: make Icon buttons + icon integrations */
const ActionableModal = ({ visible, onClose, refresh, stuffId }) => {
  if (!visible) {
    return null
  }
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

  const { response } = useAxiosInit({
    axiosConfig: { method: 'get', url: 'stuffs/fetch', data: stuffId },
  })

  console.log(response)
  useEffect(() => {
    if (!stuffId) {
      return null
    }
  }, [stuffId])

  return (
    <PctModal visible={visible} onClose={onClose}>
      {!isUnactionable && (
        <>
          <h3>Is it actionable?</h3>
          <button>Yes</button>
          <button onClick={() => setIsUnactionable(true)}>No</button>
        </>
      )}
      {/* TODO: different component 
     {isUnactionable && (
        <div className="flex--space">
          <div>
            <h3>Don&apos;t need it anymore</h3>
            <button onClick={executeDelete}>Trash</button>
          </div>
          <div>
            <h3>I might want to do this someday</h3>
            <div>
              <SelectAddCategory />
            </div>
            <button>Add to someday list</button>
          </div>
          <div>
            <h3>potentially useful information</h3>
            <button>Reference</button>
          </div>
        </div>
      )} */}
    </PctModal>
  )
}

export default ActionableModal
