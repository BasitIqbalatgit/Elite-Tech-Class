
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
import Profile from "./componenets/week3_s3/Profile";
import Test from "./componenets/week3_s4/Test";
import ToDo from "./componenets/week3_s4/ToDo";
import Cart from "./componenets/week3_s5/Cart";
import StudentRegistration from "./componenets/Backend/StudentRegistration";
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
      
        {/* <ThemeProvider>
            <Routes>
              <Route path="/" element={<Week3Home/>} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
        </ThemeProvider> */}


        {/* <Test /> */}
      
      {/* <ToDo /> */}
      {/* <Cart /> */}



          <StudentRegistration />

    </div>
  )
}

export default App;


