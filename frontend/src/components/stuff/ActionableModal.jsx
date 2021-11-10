import React, { useEffect, useState } from 'react'
import useAxiosInit from '../../hooks/useAxiosInit'
import PctModal from '../PctModal'
import NotActionableChoices from './NotActionableChoices'

/* TODO: make Icon buttons + icon integrations */
const ActionableModal = ({ visible, onClose, refresh, stuffId }) => {
  if (!visible) {
    return null
  }
  const [isUnactionable, setIsUnactionable] = useState(false)

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

      {isUnactionable && (
        <NotActionableChoices stuffId={stuffId} onClose={onClose} refresh={refresh} />
      )}
    </PctModal>
  )
}

export default ActionableModal
