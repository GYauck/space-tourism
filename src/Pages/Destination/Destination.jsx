import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./destination.module.css";
import data from "../../data.json";

const Destination = () => {


  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);
  const [isActive, setActive] = useState();
  const { name, images, description, distance, travel } = planets[value];

  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    setActive(event.target.id);
  };

  return (
    <div className={style.background}>
      <Navbar />
      <div className={style.fullContainer}>
        <div className={style.leftContainer}>
          <div className={style.titleContainer}>
            <h2 className={style.title}>
              01 <span className={style.titleSpan}>PICK YOUR DESTINATION</span>{" "}
            </h2>
            <img className={style.planetImg} src={images.png} alt="PlanetImg" />
          </div>
          <div className={style.rightContainer}>
            <ul className={style.ulNav}>
              {planets.map((planet, index) => (
                <li key={index}>
                  <button
                    id={index}
                    className={
                      isActive == index ? style.activeButtom : style.ulButton
                    }
                    onClick={(e) => {
                      handleClick(e);
                      setValue(index);
                    }}
                  >
                    {planet.name.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
            <h2 className={style.planetName}>{name}</h2>
            <p className={style.pDescription}>{description}</p>
            {/* <hr /> */}
            <ul className={style.ulDescription}>
              <li className={style.liDistance}>
                <span>AVG. DISTANCE</span>{" "}
                <span className={style.spanDescription}>
                  {distance.toUpperCase()}
                </span>
              </li>
              <li className={style.liTravel}>
                EST. TRAVEL TIME{" "}
                <span className={style.spanDescription}>
                  {travel.toUpperCase()}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
