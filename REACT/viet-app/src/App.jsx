
import {  Route, Routes } from "react-router-dom";
import "./App.css"
import StudentApp from "./componenets/StudentApp";
import Main from "./componenets/week3_s1/main";

import UseEfect from "./componenets/week3_s1/UseEfect";
import Home from "./componenets/week3_s2/Home";
import Login from "./componenets/week3_s2/Login";
import { Dashboard } from "./componenets/week3_s2/Dashboard";
const App = () => {
  return (
    <div>
      {/* <StudentApp /> */}
      {/* <Main /> */}
      {/* <UseEfect /> */}

      <Routes>
        <Route  path="/"  element={<Home />} />
        <Route  path="/login"  element={<Login />} />
        <Route  path="/dashboard/:name"  element={<Dashboard />} />
      </Routes> 
    </div>
  )
}

export default App;


