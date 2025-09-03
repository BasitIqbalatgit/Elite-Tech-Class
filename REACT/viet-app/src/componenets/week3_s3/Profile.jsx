import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'

const Profile = () => {
   
    const{name,setName} = useContext(AuthContext)

    const handleClick=()=>{
        setName("Ahsan")
    }
  return (
    <div>Name : {name}
    <button onClick={handleClick} > Change</button>
    </div>
  )
}

export default Profile

// app> week3HOme> nav > profile
// app> profile.jsx