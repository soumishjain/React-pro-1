import React from 'react'

const Rightnav = () => {
  return (
    <div>
      <form className='flex gap-5' action="">
        <input className='border-none w-70 outline-0 px-3 py-2 bg-gray-500 rounded-4xl text-[13px] text-amber-50' placeholder='Search for a place,city or detination' type="text" />
        <button className='bg-blue-900 px-4 py-2 rounded-3xl text-amber-50'>Book now</button>
      </form>
    </div>
  )
}

export default Rightnav
