import React, { useEffect, useState } from 'react'
import useAxiosInit from '../../hooks/useAxiosInit'
import PctModal from '../PctModal'
import NotActionableChoices from './NotActionableChoices'

/* TODO: make Icon buttons + icon integrations */
const ActionableModal = ({ visible, onClose, stuffId }) => {
  if (!visible) {
    return null
  }

  const [isUnactionable, setIsUnactionable] = useState(false)

  const { refresh, response } = useAxiosInit({
    axiosConfig: { method: 'get', url: 'stuffs/fetch', params: { _id: stuffId } },
  })

  useEffect(() => {
    if (!stuffId) {
      return null
    }
  }, [stuffId])

  return (
    <PctModal title={response?.name} visible={visible} onClose={onClose}>
      {!isUnactionable && (
        <>
          <p>Is it actionable?</p>
          <button>Yes</button>
          <button onClick={() => setIsUnactionable(true)}>No</button>
        </>
      )}

      {isUnactionable && (
        <NotActionableChoices
          stuffId={stuffId}
          stuffName={response?.name}
          onClose={onClose}
          refresh={refresh}
        />
      )}
    </PctModal>
  )
}

export default ActionableModal
