import React, { useState, useEffect } from 'react'
import "./Main.css"
const Main = () => {
    const [name, setName] = useState("Basit ");// String
    const [age, setAge] =useState(0); // Number

    const [students, setStudents] = useState([// arrays of object
        {id:1, name:"Ahsan", age:1},
        {id:2, name:"Uzair", age:20},
        {id:3, name:"Usman", age:110},
    ])

    const [books, setBooks] = useState(["Wizord of OZ", "Harry Porter", "Chiverlry of the failed night"]) // array

    const [car ,setCar] = useState({color:"red", brand: "Honda"}) // object

    const handleBtn=()=>{
        setName("Ahsan")
        setAge(25)
    }
    // pitfall --> 

    // Mount --> rendering your content on screen
    // update --> changing the state
    // unmount --> deleting the content..





    const [count, setCount] = useState(1)


    const handleBtnClick=()=>{
        setCount( count + 1) // 1 + 1 = 2  // rerender --> count = 2
        setCount( count + 1) // 1 + 1 = 2 //  rerender --> count = 3
        setName("basit")

        // stores the state in teh batch count=2 quese --> rerender virtaul Dom updation real map .. it takes time...
    }


    const handleSolutionClick=()=>{
        setCount(prev => prev + 1)// 1 + 1 = 2
        setCount(prev => prev + 1) // 2 + 1 =3
    }








   
  return (
    <div className='container'>
        <div className='card'>

       <p>{count}</p> 

        <button className='btn' onClick={handleBtnClick}>Increase by 2</button>
        <button className='btn' onClick={handleSolutionClick}>Increase by 2 atlast</button>
        </div>
    </div>
  )
}

export default Main