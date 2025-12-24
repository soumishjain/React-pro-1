import React from 'react'

const Rightcard = (props) => {
  return (
    <div className='w-full flex gap-3 bg-blue-950 text-white rounded-2xl p-3'>
      <div style={{backgroundImage: `url(${props.elems.img})`}} className='h-full w-1/3 bg-center bg-cover rounded-2xl'>
      </div>
      <div className=''>
        <h2 className='text-lg mb-2'>{props.elems.h}</h2>
        <p className='text-sm'>{props.elems.text}</p>
      </div>
    </div>
  )
}

export default Rightcard
