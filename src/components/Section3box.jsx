import React from 'react'
import Section3top from './Section3top'
import Section3mid from './Section3mid'
import Section3bot from './Section3bot'
const Section3box = () => {
  return (
    <div className='bg-gray-200 rounded-2xl py-8 px-15 flex flex-col gap-10'>
      <Section3top />
      <Section3mid />
      <Section3bot />
    </div>
  )
}

export default Section3box
