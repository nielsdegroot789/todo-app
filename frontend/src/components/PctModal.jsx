import React from 'react'

const PctModal = ({ title, description, isVisible = false, children, onClose, extra }) => {
  if (!isVisible) {
    return null
  }

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div class="modal-header">
          <span className="close-modal-icon">&times;</span>
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
