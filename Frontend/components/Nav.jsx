import React from 'react'
import { Search } from 'lucide-react';
import { Heart,Menu } from 'lucide-react';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'
const Nav = () => {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: scrolled ? "#F5A623" : "#FFFFFF",
      }}
      transition={{
        duration: 0.7,
        delay: .5,
      }} className="bg-[#F5a623] p-5 flex justify-between fixed top-0 left-0 right-0 z-50">
      <img src='https://kidrove.com/assets/images/Kidrove-log-new.png' className='h-7 w-auto'/>
      <div  className='flex gap-3'>
        <Search  color="#f3f1f1" strokeWidth={1.5} className="bg-pink-400 rounded-4xl p-1 "/>
      <Heart  strokeWidth={1.95} color={scrolled ? "white" : "#F5A623"} fill={scrolled ? "white" : "#F5A623"}/>
      <Menu color={scrolled ? "white" : "#F5A623"} strokeWidth={2.35} />
        </div>
    </motion.div>
  )
}

export default Nav
