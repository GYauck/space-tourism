import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./destination.module.css";
import data from "../../data.json";


const Destination = () => {

  const [planets] = useState(data.destinations)
  
  //console.log(planets[0].images.webp)
  
  const [value, setValue] = useState(0)
  const { name, images, description, distance, travel } = planets[value]
  console.log(images.png)
  return (
    <div className={style.background}>
      <Navbar />

      <div className={style.destinationContainer}>

        <div className={style.titleContainer}>
          <h2 className={style.title}>01<span className={style.titleSpan}>PICK YOUR DESTINATION</span> </h2>
          <img className={style.planetImg} src={images.png} alt="image" />
        </div>
        <div className={style.rigthContainer}>
        <ul className={style.ulNav}>
          {planets.map((planet, index) => 
            <li key={index} >
              <button className={style.ulButton} onClick={()=> setValue(index)}>
                {planet.name.toUpperCase()}
              </button>
            </li>
          )}
        </ul>
        <h2 className={style.planetName}>
          {name}
        </h2>
        <p className={style.pDescription}>
          {description}
        </p>
        <hr />
        <ul className={style.ulBottom}>
          <li className={style.liDistance}>
            AVG. DISTANCE <span className={style.spanBottom}>{distance}</span>
          </li>
          <li className={style.liTravel}>
            EST. TRAVEL TIME <span className={style.spanBottom}>{travel}</span>
          </li>
        </ul>
        </div>
          
      </div>
    </div>
  );
};

export default Destination;
