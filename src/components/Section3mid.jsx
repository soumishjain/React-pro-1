import React from 'react'
import Section3midcards from './Section3midcards'

const Section3mid = () => {
    const arr =[
        {
            img:'https://i.pinimg.com/1200x/68/91/80/689180e2e052e2e5535de592257f1db6.jpg',
            city: 'El Nido',
            place: 'Beach Paradise | ⭐ 4.8(1.2k)',
            location: '📍 Palawan Region',
            price: '4999'
        },
        {
            img:'https://i.pinimg.com/1200x/cd/e7/09/cde7093f06eb3029e9262cf1c3aee913.jpg',
            city: 'Baguio City',
            place: 'Mount Getaway | ⭐ 4.6(950)',
            location: '📍 Palawan Region',
            price: '3200'
        },
        {
            img:'https://i.pinimg.com/736x/49/60/ee/4960eeaeb1eb5e05b343f6548721a599.jpg',
            city: 'Siagrao',
            place: 'Surf & Chill | ⭐ 4.9(2k)',
            location: '📍 Surigao del Norte Region',
            price: '5500'
        },
        {
            img:'https://i.pinimg.com/736x/0a/2e/05/0a2e05b31ba464033ad0fc78eb6b2a60.jpg',
            city: 'Vigan',
            place: 'Heritage City | ⭐ 4.7(780)',
            location: '📍 Ilocos Region',
            price: '4250'
        }]

  return (
    <div className='flex justify-around'>
      {
        arr.map((elem) => {
            return <Section3midcards elems={elem}/>
        })
      }
    </div>
  )
}

export default Section3mid
