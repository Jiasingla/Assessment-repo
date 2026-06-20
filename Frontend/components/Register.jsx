import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
   async function submitHandler(e){
e.preventDefault()
if(!pname.trim()) {
    setStatus("errorName")
    return
  }if(!email.trim() || !email.includes("@")) {
    setStatus("errorEmail")
    return
  }if(!phonenum.trim() || phonenum.toString().trim().length !== 10) {
    setStatus("errorPhone")
    return
  }
  try {
    const response = await axios.post("https://assessment-repo.onrender.com/api/enquiry", {pname, email, phonenum}, {withCredentials: true})
    console.log(response.data)
    if(response.data.message === "User already registered") {
      setStatus("exists")
    } else {
      setStatus("success")
    }
  } catch(err) {
    console.log(err)
    setStatus("error")
  }
}
    const [status, setStatus] = useState(null)
    const [pname,setpname]=useState("")
    const [email,setemail]=useState("")
    const [phonenum,setphonenum]=useState("")
    
  return (
    <div id='register' className='bg-amber-50 pt-5 pl-4 pr-4 ml-4 mr-4 mt-5 mb-3 lg:p-10 lg:mx-16 xl:mx-32 rounded-3xl flex flex-col gap-5 border border-amber-200 shadow-md'>
        <h1 className='text-2xl font-extrabold'>Register Your Child</h1>
      <form onSubmit={submitHandler}>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='text-sm font-semibold text-gray-700' >Parent / Guardian Name</label>
            <input onChange={(e)=>{
setpname(e.target.value)
            }} className='border border-amber-200 rounded-xl px-4 py-3 outline-none focus:border-amber-400' type="text" placeholder='Ravi Sharma' value={pname} name="pname"></input>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='text-sm font-semibold text-gray-700' >Email Address</label>
            <input onChange={(e)=>{
                setemail(e.target.value)
            }} className='border border-amber-200 rounded-xl px-4 py-3 outline-none focus:border-amber-400' type="email" placeholder='ravi@mail.com' value={email} name="email"></input>
        </div>
<div className='flex flex-col gap-2 mt-4'>
            <label className='text-sm font-semibold text-gray-700' >Phone Number</label>
            <input onChange={(e)=>{
                setphonenum(e.target.value)
            }} className='border border-amber-200 rounded-xl px-4 py-3 outline-none focus:border-amber-400' type="number" placeholder='9811222214' value={phonenum} name="phone"></input>
        </div>
        {status === "errorName" && <p className='text-red-500 text-sm mt-3'>⚠️ Please enter your name</p>}
{status === "errorEmail" && <p className='text-red-500 text-sm mt-3'>⚠️ Please enter a valid email</p>}
{status === "errorPhone" && <p className='text-red-500 text-sm mt-3'>⚠️ Phone number must be 10 digits</p>}
        <button className='bg-[#F5A623] text-white font-bold px-6 py-2 rounded-xl mt-5 mb-5 w-full transform transition-all duration-300 ease-in-out 
             hover:scale-100 hover:shadow-[0_0_15px_rgba(245,166,35,0.8)]'>Enroll Now only in Rs.2,999</button>
      </form>
      {status === "success" && (
  <p className='text-green-600 font-semibold text-sm text-center mb-3'>🎉 Registered successfully! </p>
)}
{status === "exists" && (
  <p className='text-orange-500 font-semibold text-sm text-center mb-3'>⚠️ You are already registered with this email or phone!</p>
)}
{status === "error" && (
  <p className='text-red-500 font-semibold text-sm text-center mb-3'>❌ Something went wrong. Please try again.</p>
)}
    </div>
  )
}

export default Register
