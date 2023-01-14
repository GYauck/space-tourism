import React from "react";
import "./navbar.css";
import Logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeClassName = "active";

  return (
    <nav>
      <div className="navContainer">
        <div className="logo">
          <img src={Logo} alt="Logo image" />
        </div>
        <hr />

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
      </div>
    </nav>
  );
};

export default Navbar;
