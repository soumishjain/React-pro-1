import React from 'react'

const Leftnav = () => {
  return (
    <div className='flex gap-8 w-1/2 items-end'>
      <h1 className='text-4xl font-bold'>Arona</h1>
      <div className="quicklinks font-medium gap-7 flex text-blue-800">
      <a href="#">Home</a>
      <a href="#">Destination</a>
      <a href="#">Packages</a>
      <a href="#">Blog</a>
      <a href="#">About us</a>
      </div>
    </div>
  )
}

export default Leftnav
