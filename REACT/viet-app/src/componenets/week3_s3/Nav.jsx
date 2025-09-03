import React from 'react'
import "./Nav.css"
import ToggleBtn from './ToggleBtn'
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import { Link } from 'react-router-dom'
const Nav = () => {
    const{theme} = useContext(ThemeContext)



    
  return (
    <div className='navbar' style={{backgroundColor : theme ==="light" ? "wheat" : "black" , color : theme === "light" ? "black" : "white"}}>
        <p className='logo'>LOGO</p>
        <div className='linksContainer'>
            <p>Home</p>
            <p>Menu</p>
            <p>Contact Us</p>
            <p>About</p>
            <p>Services</p>
            <Link to="/profile">            
            <p>Profile</p>
            </Link>
        <ToggleBtn />
        </div>
    </div>
  )
}

export default Nav