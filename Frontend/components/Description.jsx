import React from 'react'
import { CalendarDays,Laptop,Baby,BookText,CircleDollarSign } from 'lucide-react';
const Description = () => {
    
  return (
    <div className='bg-amber-50 pt-5 pl-4 pr-4 ml-4 mr-4 mt-5  lg:p-10 lg:mx-16 xl:mx-32 rounded-3xl flex flex-col gap-5 border border-amber-200 shadow-md'>
      <div className='flex gap-10 lg:justify-between'>
        <button className='bg-amber-100 rounded-full p-2'><CalendarDays strokeWidth={1.5} size={36} color="#F5A623" fill="white"/></button>
        <div>
            <h1 className='text-lg font-bold'>15 Jul – 12 Aug 2026</h1>
            <h2 className='text-gray-700'>Date Range</h2>
        </div>
      </div>
      <hr className='border-gray-300' />
      <div className='flex gap-10 lg:justify-between'>
        <button className='bg-amber-100 rounded-full p-2'><Laptop  color="#706b6b" strokeWidth={2.25} fill="black" size={36} /></button>
        <div>
            <h1 className='text-lg font-bold'>Online (Live Sessions)</h1>
            <h2 className='text-gray-700'>Teaching Mode</h2>
        </div>
      </div>
       <hr className='border-gray-300' />
      <div className='flex gap-10 lg:justify-between'>
        <button className='bg-amber-100 rounded-full p-2'><Baby  color="#706b6b" strokeWidth={2.25}  size={36}/></button>
        <div>
            <h1 className='text-lg font-bold'>8–14 Years</h1>
            <h2 className='text-gray-700'>Age Group</h2>
        </div>
      </div>
       <hr className='border-gray-300' />
      <div className='flex gap-10 lg:justify-between'>
        <button className='bg-amber-100 rounded-full p-2'><BookText size={36} color="#f1eeee" strokeWidth={2.25} fill="red"/></button>
        <div>
            <h1 className='text-lg font-bold'>AI & Robotics</h1>
            <h2 className='text-gray-700'>Subject</h2>
        </div>
      </div>
       <hr className='border-gray-300' />
      <div className='flex gap-10 lg:justify-between'>
        <button className='bg-amber-100 rounded-full p-2'><CircleDollarSign size={36} color="#000000" strokeWidth={2.25} fill="yellow"/></button>
        <div>
            <h1 className='text-lg font-bold'>₹2,999 only</h1>
            <h2 className='text-gray-700'>Fee</h2>
        </div>
      </div>
       <hr className='border-gray-300' />
    </div>
  )
}

export default Description
