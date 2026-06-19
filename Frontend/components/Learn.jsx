import React from 'react'

const Learn = () => {
  return (
    <div className='bg-amber-50 pt-5 pl-4 pr-4 ml-4 mr-4 mt-5  lg:p-10 lg:mx-16 xl:mx-32 rounded-3xl flex flex-col gap-5 border border-amber-200 shadow-md'>
      <h1 className='text-3xl lg:text-4xl font-extrabold'>What you'll learn</h1>
      <div className='flex gap-4'>
        <span className='text-red-950 rounded-full p-2 font-bold text-lg bg-amber-100'>1</span>
        <p>Build and program a working robot simulation</p>
      </div>
      <div className='flex gap-4'>
        <span className='text-red-950 rounded-full p-2 font-bold text-lg bg-amber-100'>2</span>
        <p>Understand core AI concepts like pattern recognition & decision trees</p>
      </div>
      <div className='flex gap-4'>
        <span className='text-red-950 rounded-full p-2 text-lg font-bold bg-amber-100'>3</span>
        <p>Create their first machine learning model</p>
      </div>
       <div className='flex gap-4'>
        <span className='text-red-950 rounded-full p-2 font-bold text-lg bg-amber-100'>4</span>
        <p>Develop computational thinking and problem-solving skills</p>
      </div>
      <div className='flex gap-4'>
        <span className='text-red-950 rounded-full p-2 font-bold text-lg bg-amber-100'>5</span>
        <p>Complete a capstone project to showcase to family & friends</p>
      </div>
    </div>
  )
}

export default Learn
