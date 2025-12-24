import React from 'react'

const Achievements = (props) => {
    console.log(props)
  return (
    <div className='w-50 flex justify-center items-center flex-col gap-1'>
      <div style={{backgroundImage: `url(${props.elem.img})`}} className="top h-15 w-15 bg-cover bg-center rounded-full"></div>
      <div className="mid text-center font-bold">{props.elem.mid}</div>
      <div className="bot text-center font-medium">{props.elem.bot}</div>
    </div>
  )
}

export default Achievements
