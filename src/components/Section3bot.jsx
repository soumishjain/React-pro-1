import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Section3bot = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <button className='px-3 py-2 border-none outline-none bg-blue-900 text-white font-medium rounded-4xl'>View More</button>
      </div>
      <div className='flex gap-3'>
        <button className='py-1 px-2 rounded-full border-2 text-2xl'><i className="ri-arrow-left-s-line"></i></button>
        <button className='py-1 px-2 rounded-full border-2 text-2xl'><i className="ri-arrow-right-s-line"></i></button>
      </div>
    </div>
  )
}

export default Section3bot
