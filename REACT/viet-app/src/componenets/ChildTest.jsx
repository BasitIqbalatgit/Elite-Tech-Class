import React from 'react'
import "../styles/ChildTest.css";
import { data } from 'react-router-dom';
const ChildTest = ({std,setStd}) => {
      

  return (
    <div className='Card'>
        <p>Name : {std.name}</p>
        <p>Age : {std.age}</p>
        <p>RegNo : {std.regNo}</p>
        <button onClick={()=>setStd(std)}>Select</button>
    </div>
  )
}

export default ChildTest