import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import style from "./home.module.css"

const Home = () => {
  return (
    <>
    <div className={style.backgroundHome}>
    <Navbar/>
    <div className={style.homeContainer}>
      <div className={style.cardContainer}>
      <h1 className={style.heading5}>SO, YOU WANT TO TRAVEL TO</h1>
      <h2 className={style.heading1}>SPACE</h2>
      <p className={style.bodyText}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className={style.exploreCircle}>
        EXPLORE
      </div>
    </div>
    </div>
    </>
  )
}

export default Home