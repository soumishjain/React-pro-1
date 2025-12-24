import React from 'react'
import Achievements from './Achievements'

const Section2leftbottom = () => {
    const arr = [
        {
            img: 'https://i.pinimg.com/736x/e5/bc/f6/e5bcf6554592db1a0b7c2601ad9f79a0.jpg',
            mid:'12K',
            bot:'Happy and Satisfied travellers'
        },
        {
            img: 'https://i.pinimg.com/1200x/e4/b2/b9/e4b2b929e14bdfc0e46b10ebf3a34f2c.jpg',
            mid:'10 yrs',
            bot:'Proven Travel industry experience'
        },
        {
            img: 'https://i.pinimg.com/1200x/f4/31/42/f43142f855b49af6baf2feb0d3fe19c1.jpg',
            mid:'50+',
            bot:'Phillipine Destinations Covered'
        }
    ]
  return (
    <div className='flex justify-between px-7 items-center mt-30'>
    {arr.map(function(elem){
        return <Achievements elem={elem}/>
    })}
    </div>
  )
}

export default Section2leftbottom
