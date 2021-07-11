import React from 'react'

const PctModal = ({ title, description, isVisible = false, children, onClose, extra }) => {
  if (!isVisible) {
    return null
  }

  return (
    <div onClick={onClose} class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="close-modal-icon" onClick={onClose}>
            &times;
          </span>
          {title}
        </div>
        <div id="modal-children-container">{children}</div>
        <div class="modal-footer">
          <button onClick={onClose}>Cancel</button>
          {extra}
        </div>
      </div>
    </div>
  )
}

export default PctModal
