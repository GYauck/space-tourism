import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./home.css"

const Home = () => {
  return (
    <>
    <div className='background-home'>
    <Navbar/>
    <div className='homeContainer'>
      <div className='cardContainer'>
      <h1 className='heading-5'>SO, YOU WANT TO TRAVEL TO</h1>
      <h2 className='heading-1'>SPACE</h2>
      <p className='body-text'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className='exploreCircle'>
        EXPLORE
      </div>
    </div>
    </div>
    </>
  )
}

export default Home