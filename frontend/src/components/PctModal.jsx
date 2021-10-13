import React from 'react'

const PctModal = ({ visible = false, children, onClose, extra }) => {
  if (!visible) {
    return null
  }

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
        </div>
        <div id="modal-children-container">{children}</div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          {extra}
        </div>
      </div>
    </div>
  )
}

export default PctModal
