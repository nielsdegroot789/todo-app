import React from 'react'

const Notification = ({ type, title, description, onClose, onMore }) => {
  return (
    <div>
      {title}
      {description}
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Notification
