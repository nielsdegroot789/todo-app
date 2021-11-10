import React from 'react'

const PctModal = ({ title, visible = false, children, onClose, onSubmit, onDelete, extra }) => {
  if (!visible) {
    return null
  }

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3>{title}</h3>
        <div className="modal-header">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
        </div>
        <div id="modal-children-container">{children}</div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          {onSubmit && <button onClick={onSubmit}>Submit</button>}
          {onDelete && <button onClick={onDelete}>Delete</button>}
          {extra}
        </div>
      </div>
    </div>
  )
}

export default PctModal
