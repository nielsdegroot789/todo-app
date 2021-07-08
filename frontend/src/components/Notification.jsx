import React from 'react'

const Notification = ({ type, title, description, onClose, onMore }) => {
  // TODO: add different types and styling, fix onClose
  console.log(title)
  return (
    <div>
      {title}
      {description}
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Notification
