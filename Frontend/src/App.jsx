import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Description from '../components/Description'
import Learn from '../components/Learn'
import Ques from '../components/Ques'
import Register from '../components/Register'

const App = () => {
  return (
    <div >
      <Nav/>
      <div className='pt-16'>
        <Hero />
        <Description />
        <Learn/>
        <Ques/>
        <Register/>
      </div>
    </div>
  )
}

export default App
