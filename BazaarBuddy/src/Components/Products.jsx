import React, { useState } from 'react'


const Products = () => {
  const ButtonData =[ 'All','Fruits','vegetables','Dairy']
  const [change,setchange]=useState('All')
  return (
    <div>
    <div className='text-4xl font-bold flex items-center justify-center mt-30'>
        <h1>Our<span className='text-orange-500 '>Products</span></h1>
        </div>
        <div className='flex items-center justify-center mt-10 gap-x-15 '>
          {ButtonData.map((elm)=>{
            return(
              <button className={` px-4 py-2 rounded ${change === elm ? 'bg-orange-500': 'bg-zinc-200'}`}onClick={()=>setchange(elm)} >
                {elm}
              </button>
            )
          })}
        </div>
    </div>
  )
}
export default Products

