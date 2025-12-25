import React from 'react'

const Section4rightcards = (props) => {
  return (
    <div style={{backgroundImage:`url(${props.bg})`}} className='w-2/7 bg-amber-500 flex flex-col justify-between p-7 rounded-2xl bg-center cg-cover'>
      <div className="top">
        <img className='opacity-85 rounded-full h-22 w-22 mb-5' src={props.img} alt="" />
        <h2 className='text-white text-3xl font-medium w-8/10'>{props.h}</h2>
      </div>
      <div className="bot">
        <p className='font-medium text-white text-lg'>{props.p}</p>
      </div>
    </div>
  )
}

export default Section4rightcards
