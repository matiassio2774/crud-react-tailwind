import React from 'react'

function Th({ children }) {
  return (
    <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>{ children }</th>
  )
}

export default Th