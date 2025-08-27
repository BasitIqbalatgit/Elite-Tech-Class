
import { Route, Routes } from "react-router-dom";
import "./App.css"
import StudentApp from "./componenets/StudentApp";
import Main from "./componenets/week3_s1/main";

import UseEfect from "./componenets/week3_s1/UseEfect";
import Home from "./componenets/week3_s2/Home";
import Login from "./componenets/week3_s2/Login";
import Dashboard from "./componenets/week3_s2/Dashboard";
import Week3Home from "./componenets/week3_s3/Week3Home";
import ThemeProvider from "./componenets/week3_s3/ThemeProvider";
const App = () => {
  return (
    <div>
      {/* <StudentApp /> */}
      {/* <Main /> */}
      {/* <UseEfect /> */}

      {/* <Routes>
        <Route  path="/"  element={<Home />} />
        <Route  path="/login"  element={<Login />} />
        <Route  path="/dashboard/:name"  element={<Dashboard />} />
      </Routes>  */}
      
        <ThemeProvider>
          <Week3Home />        
        </ThemeProvider>
      
    </div>
  )
}

export default App;


