import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./technology.module.css";
import data from "../../data.json";

const Technology = () => {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);
  const [isActive, setActive] = useState(0);
  const { name, images, description } = technology[value];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)");
    setIsSmallScreen(mq.matches);
    mq.addEventListener("change", (e) => {
      setIsSmallScreen(e.matches);
    });
    return () => {
      mq.removeEventListener("change", (e) => {
        setIsSmallScreen(e.matches);
      });
    };
  }, []);

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
          <h1 className={style.title}>
            03 <span className={style.titleSpan}>SPACE LAUNCH 101</span>
          </h1>
          <div className={style.ulAndContent}>
            <ul className={style.ulNav}>
              {technology.map((technology, index) => (
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
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>

            <div className={style.nameAndDescriptionContainer}>
              <h2 className={style.subTitle}>THE TERMINOLOGY...</h2>
              <h3 className={style.name}>{name.toUpperCase()}</h3>
              <p className={style.description}>{description}</p>
            </div>
          </div>
        </div>
        <div className={style.rightContainer}>
          {isSmallScreen ? (
            <img src={images.landscape} alt="TechnologyImg" />
          ) : (
            <img src={images.portrait} alt="TechnologyImg" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;
