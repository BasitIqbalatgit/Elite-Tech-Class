import React, { useEffect, useState } from 'react'
import api from "../../utils/axios"
const StudentRegistration = () => {
    const[id,setId]=useState(0)
    const[name, setName] = useState("")
    const [regNo, setRegNo] = useState("");
    const [students, setStudents] = useState([]);//


    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(name)
        console.log(regNo)  
        const res = await api.post("/students",{id:id, name: name, regNO: regNo})
        console.log("post response is this: ",res.data)
        setId(0)
        setName("")
        setRegNo("")
        const {id, name, regNO} = res.data
        newData = {id: id, name: name, regNo:regNO}
        setStudents([...students], newData)

    }   


    useEffect(()=>{
        const fetchData=async()=>{
            console.log("i am working")
            const res =await api.get("/students");
            console.log(res.data.students)
            setStudents(res.data.students)
        }

        fetchData()
    },[])

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"20px"}}>
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>


        <div>
            <label> id: </label>
            <input type='number'  value={id} onChange={(e)=>{setId(e.target.value)}} required />
        </div>
        <div>
            <label> Name: </label>
            <input type='text'  value={name} onChange={(e)=>{setName(e.target.value)}} required />
        </div>
        <div>
            <label> Reg No: </label>
            <input type='text'  value={regNo} onChange={(e)=>{setRegNo(e.target.value)}} required />
        </div>
        <button type='submit'>Add Students</button>
        </form>

        {
            students.map((std)=>{
                return(
                    <li key={std.id}>
                        {std.name}
                        {std.regNO}
                    </li>
                )
            })
        }
    </div>
  )
}

export default StudentRegistration