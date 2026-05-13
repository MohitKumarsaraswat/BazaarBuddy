import React from 'react'
import Heroimage from'../assets/Heroimage.png'
const Hero = () => {
  return (
     <section className='px-10 flex items-center justify-between mt-30'>
    <div className=''>
            <span className='bg-orange-300 rounded-full items-center  px-4 py-1 '>Export best items....</span>
            <h1 className='text-6xl font-bold uppercase'>Tasty Organic <br/><span  className='text-orange-500'>Fruits</span> & <span className='text-orange-500' >veggies</span> In <br/>your city
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum <br/>nesciunt est blanditiis magni pariatur laborum labore quae.</p>
            <button className='bg-orange-400 rounded-full px-4 py-1 mt-4 active:scale-110'>shop now </button>
       </div> 
        <div className=''>
            <img className='h-150 w-150 mr-25' src={Heroimage}/>
        </div>
    
     </section>
  )
}

export default Hero;