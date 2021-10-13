import React from 'react'

const Stuff = ({ stuff, setEditStuff, setDeleteId, setActionable }) => {
  return (
    <div id="stuff-item-container">
      <div className="flex--space-center">
        <h4>Name: </h4>
        &nbsp;
        <h4>{stuff?.name}</h4>
      </div>
      <div className="flex--space-center">
        <h4>More info: </h4>
        &nbsp;
        <h4>{stuff?.description}</h4>
      </div>
      <h4>{stuff?.date}</h4>
      <button onClick={() => setActionable(stuff._id)}>handle stuff</button>
      <button onClick={() => setDeleteId(stuff._id)}>Delete stuff</button>
      <button onClick={() => setEditStuff(stuff)}>Edit stuff</button>
    </div>
  )
}

export default Stuff
