import React from 'react'

const SearchInput = ({ setFilterText }) => {
  return (
    <div>
      <label for="searchString">search stuff</label>
      <input
        name="searchString"
        for="searchString"
        onChange={e => {
          console.log('triggered', e.target.value)
          setFilterText(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchInput
