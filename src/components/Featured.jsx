import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title' 
import { useNavigate } from 'react-router-dom'


const Featured = () => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col item-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
         
         <Title title='Popular Hotels ' subtitle='Your next adventure starts with the perfect place to stay.
          Browse thousands of trusted hotels, compare prices, and reserve your room in minutes—all with a fast, secure, and hassle-free booking experience.' />
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room ,index)=>(
                <HotelCard key={room._id} room={room} index={index}/>
            ))}
        </div>
        
        <button onClick={()=>{navigate('/hotels'); scrollTo(0,0)}} className="w-max mx-auto mt-10 flex items-center justify-center gap-2 border border-gray-300  
        bg-[#1b43b1] hover:bg-[#2e05f7] text-white px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-300 font-semibold text-xs sm:text-sm">
          <span >View All</span> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
           <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
         </svg>
         </button>
    </div>
  )
} 

export default Featured