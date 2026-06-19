import React from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
  const scrollToRegister = () => {
  const section = document.getElementById("register");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <div className='bg-amber-100 p-5 rounded-2xl mt-5 mx-4 flex flex-col items-center text-center lg:flex-row lg:items-center lg:p-10 lg:mx-16 xl:mx-32'>
      
      
      <div className='flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1'>
        
        <h1 className='bg-[#f5c423] rounded-2xl px-3 py-1 max-w-fit text-white text-sm font-semibold mb-2.5'>
          🤖 Summer Workshop 2026
        </h1>
        
        <h1 className='text-black text-3xl lg:text-5xl font-bold mt-1'>
          AI & Robotics
        </h1>
        
        <h1 className='text-[#F5A623] text-3xl lg:text-5xl font-bold'>
          Summer Workshop
        </h1>
        
        <p className='text-gray-600 mt-3 lg:max-w-md'>
          4 weeks of hands-on fun for children aged 8–14. Learn AI, build robots, think like engineers!
        </p>

        <p className='hidden lg:block text-gray-500 mt-2 text-sm lg:max-w-md'>
          ✅ Live sessions with expert mentors · ✅ Recorded classes · ✅ Certificate on completion
        </p>
        
        <div className='flex gap-2 mt-5 flex-wrap justify-center lg:justify-start'>
          <button className='bg-[#f3d46f] text-amber-900 rounded-full px-3 py-1.5 text-sm font-semibold'>
            🟢 Online
          </button>
          <button className='bg-[#f3d46f] text-amber-900 rounded-full px-3 py-1.5 text-sm font-semibold'>
            ⏱ 4 Weeks
          </button>
          <button className='bg-[#f3d46f] text-amber-900 rounded-full px-3 py-1.5 text-sm font-semibold'>
            🎂 Ages 8–14
          </button>
        </div>

        <div className='flex bg-white mt-5 p-3 justify-between items-center rounded-xl w-full lg:w-80'>
          <div>
            <h2 className='text-gray-500 text-sm'>Starting from</h2>
            <h1 className='text-2xl font-extrabold text-[#F5A623]'>Rs. 2,999</h1>
          </div>
         <button 
  onClick={scrollToRegister}
  className='bg-[#F5A623] text-white font-bold px-6 py-2 rounded-xl transform transition-all duration-300 ease-in-out 
             hover:scale-100 hover:shadow-[0_0_15px_rgba(245,166,35,0.8)]'
>
  Book Now →
</button>
        </div>

      </div>

      <div className='hidden lg:flex lg:flex-1 justify-center items-center'>
        <img
          src='data:image/jpeg;base64,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'
          alt='robot animation'
          className='w-full h-full object-contain rounded-2xl'
        />
      </div>

    </div>
  )
}

export default Hero