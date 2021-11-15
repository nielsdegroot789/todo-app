import React from 'react'
import useDelete from '../../hooks/useDelete'
import useToggle from '../../hooks/useToggle'
import DeleteConfirmationModal from '../DeleteConfirmationModal'
import CreateSomedays from './CreateSomedays'

const NotActionableChoices = ({ stuffId, refresh, onClose }) => {
  const [isToggled, toggle] = useToggle()
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
    <div>
      <div className="flex--space">
        <div>
          <h3>Don&apos;t need it anymore</h3>
          <button onClick={toggle}>Trash</button>
        </div>
        <div>
          <h3>I might want to do this someday</h3>
          <div>
            <CreateSomedays />
          </div>
          <button>Add to someday list</button>
        </div>
        <div>
          <h3>potentially useful information</h3>
          <button>Reference</button>
        </div>
      </div>
      <DeleteConfirmationModal method={executeDelete} visible={isToggled} onClose={toggle} />
    </div>
  )
}

export default NotActionableChoices
