import React from 'react'
import "./navbar.css"
import Logo from "../../assets/shared/logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav>
        
      <div className='navContainer'>
        
      <div className='logo'>
      <img src={Logo} alt="Logo image" />
      </div>
      <hr />
        
      
      <ul className='navLinks'>
        <li className='navText'>
          <Link to={"/"} >
          00 HOME
          </Link>
        </li>
        <li className='navText'>
          <Link>
          01 DESTINATION
          </Link>
        </li>
        <li className='navText'>
          <Link>
          02 CREW
          </Link>
        </li>
        <li className='navText'>
          <Link>
          03 TECHNOLOGY
          </Link>
        </li>
      </ul>
      
      </div>
      </nav>
      
  )
}

export default Navbar