import React from 'react'

const SearchBar = ({ setFilterText }) => {
  return (
    <div>
      <label for="searchString">search todo</label>
      <input
        name="searchString"
        for="searchString"
        onChange={e => {
          setFilterText(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchBar
