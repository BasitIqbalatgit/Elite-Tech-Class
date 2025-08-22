import React, { useState } from 'react'
import "../styles/Form.css"
const Form = ({student, updateStudentData}) => {

    const [formData, setFormData] = useState(student);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>(
            {
                ...prev, [name]:value
            }
        ))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formData)
        updateStudentData(formData);
    }


  return (
    <div>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={formData.name} placeholder='Enter Your name' onChange={handleChange}/>
            <input type='number' name='age' value={formData.age} placeholder='Enter Your age' onChange={handleChange}/>
            <input type='text' name='regNo' value={formData.regNo} placeholder='Enter Your regNO' onChange={handleChange}/>
            <button type='submit' >Update</button>
        </form>
    </div>
  )
}

export default Form