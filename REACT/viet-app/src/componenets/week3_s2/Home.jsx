import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';

// there are 2 ways..
//1 . through the link tag.
const Home = () => {
  return (
    <div className='container'>
        <p>Wellcome to MERN Stack Class of Navigation 🚀🚀</p>
        <Link to="/login"><p>Login</p></Link>
    </div>
  )
}

export default Home


// Traditional Website--> you clicked on the button --> request from broweser to server--> server processes the request ---> sended the new HTML --> browser reloaded the whole page to render new HTML.

// SPA --> you clicked on link -- > request from broweser to server--> server processes the request ---> sended the new HTML --> the new content will be displayed wihtout reloadig the whole page.








// Navigation ...
// 3 things ...
// 1. go to the starging point of webstie.. (main.jsx) --> BrowerserRouter
// 2. Make the destination.
// 3. Go To App.jsx to make the routes.