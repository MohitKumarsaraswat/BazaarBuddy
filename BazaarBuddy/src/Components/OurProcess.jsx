import React from "react";
import { PiPlant } from "react-icons/pi";
import { MdFactory } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { BiSolidMedal } from "react-icons/bi";
const arr =[
    {
        id:1,
        Tittle:"Sourcing",
        Discription:"It is a long established fact that a reader ",
        Icon: <PiPlant  className='size-8 ' />,

    },
     {
        id:2,
        Tittle:"Manufacturing",
        Discription:"It is a long established fact that a reader",
        Icon:<MdFactory className='size-8'/>,
        
    },
     {
        id:3,
        Tittle:"Quality control",
        Discription:"It is a long established fact that a reader",
        Icon: <BiSolidMedal className='size-8'/>,
        
    },
     {
        id:4,
        Tittle:"Logistic",
        Discription:"It is a long established fact that a reader",
        Icon: <FaTruck className='size-8'/>,
        
    }
]
    const Process = arr.map((elm)=>{
        return(
            <div key={elm.id} className=' mb-40'>
                {/* button */}
                <div className='flex items-center mx-20 mb-20'>
                <div className=' border-3 border-dashed rounded-full h-fit  w-fit  flex  items-center justify-center '>
                <button className='  rounded-full h-15 w-15  m-1.5 text-2xl font-bold border-4 flex items-center justify-center'>
                    {elm.id}
                </button>
                </div>
                </div>
                {/* text */}
                <div className='flex gap-x-3'>
                    <div className='bg-orange-500 h-15 w-18 rounded-full flex items-center justify-center '>
                    {elm.Icon}
                    </div>
                    <div>
                        <h1 className='text-xl font-bold uppercase'>{elm.Tittle}</h1>
                        <p>{elm.Discription}</p>
                    </div>
                </div>
            </div>
            
        )
    })

const OurProcess = () => {
  return (
    <div>
        {/* Process heading */}
        <div className="  mt-25 mb-25  flex items-center justify-center">
        <h1 className="text-4xl font-bold ">
          Our <span className="text-orange-500">Process</span>
        </h1>
      </div>
      <div className='flex mx-10 gap-6'>
        {Process}
      </div>
    </div>
  )
}

export default OurProcess
