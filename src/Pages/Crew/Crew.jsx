import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./crew.module.css";
import data from "../../data.json";

const Crew = () => {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);
  const [isActive, setActive] = useState();
  const { name, images, role, bio } = crew[value];

  return (
    <div className={style.background}>
      <Navbar />
      <div className={style.fullContainer}>
        <div className={style.leftContainer}>
          <h1 className={style.title}>
            02 <span className={style.titleSpan}> MEET YOUR CREW</span>
          </h1>
          <h2 className={style.role}>{role.toUpperCase()}</h2>
          <h3 className={style.name}>{name.toUpperCase()}</h3>
          <p className={style.bio}>{bio}</p>
        </div>
        <div className={style.rightContainer}>
          <img src={images.png} alt="CrewImg" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
