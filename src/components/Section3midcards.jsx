import React from 'react'

const Section3midcards = (props) => {
  return (
    <div style={{backgroundImage: `url(${props.elems.img})`}} className='bg-cover bg-center w-70 h-90 rounded-2xl flex justify-between flex-col p-4'>
      <div className="top flex justify-end">
        <h6 className='bg-gray-400/50 rounded-4xl font-medium text-sm px-3 py-1'>Starts at ${props.elems.price}</h6>
      </div>
      <div className="bot flex gap-1 flex-col text-white">
        <h2 className='text-3xl font-medium'>{props.elems.city}</h2>
        <p className='font-medium'>{props.elems.place}</p>
        <h6 className='font-medium text-base'>{props.elems.location}</h6>
      </div>
    </div>
  )
}

export default Section3midcards
