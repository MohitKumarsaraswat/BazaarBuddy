import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { GrGrow } from "react-icons/gr";
const Values = () => {
  return (
    <div id="about" className='mx-25 min-h-screen '>
        {/* Value heading */}
        <div className="  mt-25 mb-25  flex items-center justify-center">
        <h1 className="text-4xl font-bold ">
          Our <span className="text-orange-500">Values</span>
        </h1>
      </div>
      <div className='flex items-center justify-between gap-5'>
        {/* first contant */}
        <div className='flex  flex-col gap-y-60'>  
            <div className='flex items-center'> 
            <div>
                <h1 className='font-bold text-xl '> TRUST</h1>
                <p className='text-s mt-2'>Built with care, our product earns your trust every day.</p>
            </div> 
            <div className='bg-orange-500 rounded-full h-10 w-12 flex items-center justify-center '>
                <FaHeart />
            
            </div>
            </div>
            <div className='flex items-center'>
            <div >
                <h1 className='font-bold text-xl '>ALWAYS FRESH </h1>
                <p className='text-s mt-2'>Freshness you can feel in every bite, every single time..</p>
            </div> 
            <div className='bg-orange-500 rounded-full h-10 w-12 flex items-center justify-center '>
            <FaLeaf /> 
            </div>
        </div>
        </div>
        {/* image */}
        <div>  
            <img src='https://i.pinimg.com/736x/b3/37/2d/b3372d4bd8515bfeb7cfe8fc203fed74.jpg'/> 
        </div>
        {/* second contant */}
        <div className='flex  flex-col gap-y-60'> 
            <div className='flex items-center'>
              <div>
                <h1 className='font-bold text-xl '> FOOD SEAFTY</h1>
                <p className='text-s mt-2'>Your safety comes first with our carefully handled food products</p>
            </div> 
            <div className='bg-orange-500 rounded-full h-10 w-12 flex items-center justify-center '>
            <FaShieldAlt />
            </div>
            </div>
            <div className='flex items-center'>
            <div>
                <h1 className='font-bold text-xl '>100% ORGANIC </h1>
                <p className='text-s mt-2'>100% organic products grown naturally for your healthy lifestyle daily</p>
            </div> 
            <div className='bg-orange-500 rounded-full h-10 w-12 flex items-center justify-center '>
            <GrGrow />
            </div>  
            </div>
        </div>
        </div>
    </div>

     
    
  )
}

export default Values