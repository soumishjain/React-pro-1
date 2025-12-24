import React from 'react'

const Center = () => {
  return (
    <div className='px-6 py-3 flex items-center justify-center'>
      <div className="bg-[url('https://i.pinimg.com/1200x/bb/c7/57/bbc7571bbe601c7cecd4f6f694435d75.jpg')] flex justify-center items-center flex-col bg-cover bg-center h-180 w-365 rounded-2xl">
      <div className="w-1/2 text-amber-50 pb-25 flex flex-col gap-5">
        <h1 className='text-9xl font-bold'>WANDER <span className='text-2xl'>PH</span> </h1>
      <p className='text-1xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium dolore sunt et facilis. Vitae aliquam, sit optio, dolorum at molestias impedit ipsum nesciunt eaque, veniam temporibus repudiandae. Ipsam, debitis culpa.</p>
      <div className="explorebuttons flex gap-2.5">
      <button className='px-3 py-2 bg-amber-50 font-medium text-black border-0 outline-0 rounded-4xl'>Plan your Trip</button>
      <button className='px-3 py-2 bg-transparent text-white font-medium border-2 outline-0 rounded-4xl'>Explore Destinations</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Center
