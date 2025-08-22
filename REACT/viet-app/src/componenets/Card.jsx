import React from "react";

export default function Card({ student }) {
  return (
    <div className="card">
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
}
