import React from 'react'
import Leftnav from './Leftnav'
import Rightnav from './Rightnav'
const Navbar = () => {
  return (
    <div className='flex px-9 py-4 justify-between items-center'>
      <Leftnav />
      <Rightnav />
    </div>
  )
}

export default Navbar