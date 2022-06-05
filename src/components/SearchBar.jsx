import React from 'react'

function SearchBar({ handleChange, search }) {
  return (
    <input type="search" id="mySearch" name="search"
      placeholder="Buscar..."
      className='h-10 w-4/6 max-w-lg rounded-sm p-4 outline-none'
      onChange={handleChange}
      defaultValue={search}
    />
  )
}

export default SearchBar