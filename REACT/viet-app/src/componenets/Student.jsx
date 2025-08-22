import React, { useState } from "react";
import StdCard from "./StdCard";
import StdForm from "./StdForm";

export default function Student() {
  const [students, setStudents] = useState([
          { id: 1, name: "Ali", age: 20, grade: "A" },
          { id: 2, name: "Ahmed", age: 22, grade: "B" },
          { id: 3, name: "Rizwi", age: 23, grade: "C" },
      ])

      const [selected, setSelected] = useState(null)

  const updateStudent = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };


  const handleShowform=(e)=>{
    setSelected(!selected)
  }

  return (
    <div className="app-container">
      <h1>🎓 Student Management</h1>
      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-section">
            <StdCard student={student} />
            <button onClick={(e)=>handleShowform(e)}>Show Form</button>
            {
                selected &&
                <StdForm student={student} onUpdate={updateStudent}/>
            }
          </div>
        ))}
      </div>
    </div>
  );
}
