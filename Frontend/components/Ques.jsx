import React from 'react'

const Ques = () => {
  return (
    <div className='ml-4 mr-4 mt-5 flex flex-col gap-3 lg:p-10 lg:mx-16 xl:mx-20'>
      <h1 className='text-2xl font-bold'>FAQs</h1>

      <details className='bg-white border border-amber-200 shadow-md rounded-2xl px-4 py-3'>
        <summary className='font-semibold text-gray-800 cursor-pointer'>
          What prior knowledge does my child need?
        </summary>
        <p className='text-gray-500 mt-3 text-sm'>None at all! Designed for beginners aged 8–14.</p>
      </details>

      <details className='bg-white border border-amber-200 shadow-md rounded-2xl px-4 py-3'>
        <summary className='font-semibold text-gray-800 cursor-pointer'>
          What will my child need for the sessions?
        </summary>
        <p className='text-gray-500 mt-3 text-sm'>A laptop with stable internet. All software is free and browser-based.</p>
      </details>

      <details className='bg-white border border-amber-200 shadow-md rounded-2xl px-4 py-3'>
        <summary className='font-semibold text-gray-800 cursor-pointer'>
          Will there be recordings of the sessions?
        </summary>
        <p className='text-gray-500 mt-3 text-sm'>Yes! Every session is recorded and available for 30 days.</p>
      </details>

    </div>
  )
}

export default Ques