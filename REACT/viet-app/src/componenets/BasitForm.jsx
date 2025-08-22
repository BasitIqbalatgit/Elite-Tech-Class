import React, { useState } from 'react'
import "../styles/Form.css"
const BasitForm = () => {

    const [name, setName] = useState("")
    const [age, setAge] =useState(0)
    const [regNo, setRegNo] =useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ",name)
        console.log("AGe: ",age)
        console.log("REg No : ",regNo)
    }
    return (
        <div id='container'>
            <form onSubmit={handleSubmit}>
                <div className='subcont'>
                    <label>Name: </label>
                    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='subcont'>
                    <label>Age: </label>
                    <input type='number' name='age' value={age} onChange={(e) => setAge(e.target.value)}></input>
                </div>
                <div className='subcont'>
                    <label>Reg No: </label>
                    <input type='text' name='regNo' value={regNo} onChange={(e) => setRegNo(e.target.value)}></input>
                </div>


                <button type='submit'>Click Me</button>
            </form>
        </div>
    )
}

export default BasitForm