import React, { useState } from 'react'
import useToggle from '../hooks/useToggle'

const Stuff = ({ stuff, setEditStuff, setDeleteId }) => {
  return (
    <div id="stuff-item-container">
      <h4>{stuff?.name}</h4>
      <h4>{stuff?.description}</h4>
      <h4>{stuff?.date}</h4>
      <button onClick={() => setDeleteId(stuff._id)}>Delete stuff</button>
      <button onClick={() => setEditStuff(stuff)}>Edit stuff</button>
    </div>
  )
}

export default Stuff
