import React from 'react'
import "./ToggleBtn.css";
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ToggleBtn = () => {
    // const {name ,setName} = useContext(AuthContext)
    const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div style={{backgroundColor: theme === "light" ? "black" : "white"}}>
        <button className='togglebtn' onClick={toggleTheme}></button>
    </div>
  )
}

export default ToggleBtn

// app> Week3Home > nav > togglebtn