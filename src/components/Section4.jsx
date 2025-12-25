import React from 'react'
import Section4leftcards from './Section4leftcards'
import Section4rightcards from './Section4rightcards'

const Section4 = () => {
  return (
    <div className='px-9 py-4 flex gap-5'>
      <Section4leftcards />
      <Section4rightcards bg='https://i.pinimg.com/736x/fa/57/ec/fa57ecdbde60f5b9bd78b1554bf928da.jpg' img='https://i.pinimg.com/1200x/43/a2/05/43a2057787d9746f302abd05519ae20b.jpg' h='Island hopper Adventure' p= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus odit doloremque, exercitationem voluptatem consequuntur deleniti!' />
      <Section4rightcards bg='https://i.pinimg.com/736x/bf/b6/e4/bfb6e48708d67e6bb0b19206155f58d9.jpg' img='https://i.pinimg.com/1200x/2b/d4/d3/2bd4d3d781e89e0ca583ab15730fce84.jpg' h='Northern Island Escape' p= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus odit doloremque, exercitationem voluptatem consequuntur deleniti!'/>
    </div>
  )
}

export default Section4
