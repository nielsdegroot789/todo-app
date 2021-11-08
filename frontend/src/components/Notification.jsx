import React from 'react'

const Notification = ({ title, description, onClose }) => {
  // TODO: add different types and styling, fix onClose
  
  return (
    <div>
      {title}
      {description}
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Notification
