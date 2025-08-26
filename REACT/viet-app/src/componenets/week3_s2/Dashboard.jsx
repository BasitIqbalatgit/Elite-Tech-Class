import React, { use } from 'react'
import "./Dashbord.css"
import { useLocation, useParams } from 'react-router-dom'
export const Dashboard = () => {
    const params =useParams();

    // const location = useLocation();
    // const user = location.state.user;
    // const email = location.state.email;



    return (
        <div className='container'>
            <p>Wellcome {params.name} </p>
        </div>
    )
}
