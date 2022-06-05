import React from 'react'
import SearchBar from './SearchBar'
function Navbar({ handleChange, search }) {
  return (
    <div className='bg-purple h-20 flex justify-center items-center'>
      <SearchBar handleChange={handleChange} search={search} />
    </div>
  )
}
export default Navbar