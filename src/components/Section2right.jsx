import React from 'react'
import Rightcard from './Rightcard'

const Section2right = () => {
    const arr = [
        {
            img:'https://i.pinimg.com/736x/62/c1/1e/62c11e9afda8d984e4d813a7ccfde482.jpg',
            h:'Local Expertise',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quae illum in voluptatem aliquam quo consequuntur eos ratione sapiente, vero corporis iure quis optio corrupti, laborum impedit nobis quos accusantium!'
        },
        {
            img:'https://i.pinimg.com/736x/49/cd/cc/49cdccc7d0e0dfadf2f9b079899c1cbc.jpg',
            h:'All in one Booking',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quae illum in voluptatem aliquam quo consequuntur eos ratione sapiente, vero corporis iure quis optio corrupti, laborum impedit nobis quos accusantium!'
        },
        {
            img:'https://i.pinimg.com/1200x/df/10/1c/df101cadf4a523b69f412ee91054e3c5.jpg',
            h:'24/7 Support',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quae illum in voluptatem aliquam quo consequuntur eos ratione sapiente, vero corporis iure quis optio corrupti, laborum impedit nobis quos accusantium!'
        }]
  return (
    <div className='flex flex-col gap-9 p-10'>
      {arr.map(function(elem){
        return <Rightcard elems={elem}/>
      })}
    </div>
  )
}

export default Section2right
