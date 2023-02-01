import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/shared/logo.svg";
import HamburguerLogo from "../../assets/shared/icon-hamburger.svg"
import XLogo from "../../assets/shared/icon-close.svg"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeClassName = "active";
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav>
      <div className="navContainer">
        <div className="logo">
          <img src={Logo} alt="Logo image" />
        </div>
        <hr />

        {/* Normal Nav */}
        <ul className="navLinks">
          <li className="navText">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              00 HOME
            </NavLink>
          </li>
          <li className="navText">
            <NavLink
              to={"/destination"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              01 DESTINATION
            </NavLink>
          </li>
          <li className="navText">
            <NavLink
              to={"/crew"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              02 CREW
            </NavLink>
          </li>
          <li className="navText">
            <NavLink
              to={"/technology"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              03 TECHNOLOGY
            </NavLink>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="hamburguerIcon">
          {!nav ? <img src={HamburguerLogo} alt="Hamburguer" /> : <img src={XLogo} alt="X"/>}
        </div>

        {/* Mobile Nav */}
        <ul className={!nav ? "mobileMenu" : "mobileMenuDisplay"}>
          <li className="navText">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              00 HOME
            </NavLink>
          </li>
          <li className="navText">
            <NavLink
              to={"/destination"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              01 DESTINATION
            </NavLink>
          </li>
          <li className="navText">
            <NavLink
              to={"/crew"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              02 CREW
            </NavLink>
          </li>
          <li className="navText">
            <NavLink
              to={"/technology"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              03 TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
