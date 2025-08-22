// component -> a js function that returns JSX(javascritp + html)


import ChildTest from "./childTest";
import "../styles/Test.css";
import { useState } from "react";
import Form from "./Form";

function Test(){

    const [student,setStudents] = useState([
        {name: "BASIT IQBAL",age: 22,regNo: "FA21-BSE-050"},
        {name: "Areeba",age: 19,regNo: "FA21-BEE_001"},
        {name: "Ebad", age: 20, regNo: "FA21-BSE-020"}
    ])
    const [selectedStudent, setSelectedStudent] = useState(null);

    // update the students
    const updateStudentData =(updatedStd)=>{
        setStudents((prev)=>prev.map((std)=>std.regNo === updatedStd.regNo ? updatedStd: std)
        );
        setSelectedStudent(null);
    }

    return (
        <div className="box">

            {student.map((std,idx)=>(
                            <ChildTest key={idx} std={std} setStd={setSelectedStudent}/>
                        
                    )
                )
            }        


            {
                selectedStudent && (
                    <Form student={selectedStudent} updateStudentData={updateStudentData} />
                )
            } 
          
        </div>
    )
}
export default Test;










// Prop & state...
// prop is used to pass data from parent to child
// prop is immutable


/// Rules
//1. Both the name of the file and the function shoud be same .. 
//2. Both should start with a capital letter.
// 3. class --> classname
// 4. {} --> we will use thses to use the variable js in the html here.



// 