import React from 'react'

const SearchInput = ({ setFilterText }) => {
  return (
    <div>
      <label htmlFor="searchString">search stuff</label>
      <input
        name="searchString"
        htmlFor="searchString"
        onChange={e => {
          console.log('triggered', e.target.value)
          setFilterText(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchInput
