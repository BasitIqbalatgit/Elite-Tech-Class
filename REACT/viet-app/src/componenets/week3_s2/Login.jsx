import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import Animate from './Animate'
const Login = () => {
    const [name, setName] = useState("BASIT IQBAL");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() !== "") {
            // to move to dashboard
            // navigate(`/dashboard`, {state : {user: name, email:"basit@gamil.com"}});
            navigate(`/dashboard/${name}`);
        }
        else {
            alert("Write the name in the input")
        }
    }

    const [loading, setLoading] = useState(true)
    const [color, setColor] = useState("white");
    const [shape, setShape] = useState("Triangle");
    const colors = ["red", "green", "blue", "yellow"];
    const shapes = ["Triangle", "square", "circle", "Pentagone"]
    useEffect(() => {
        const num = Math.floor((Math.random() * 10) % 4)
        console.log(num)
         setColor(colors[num])
            setShape(shapes[num])

        setTimeout(() => {
           
            setLoading(false)
        },3000)
        
    }, [])

    return (
        <div className='container'>

            {loading ? <Animate shape={shape} color={color} /> :
                <div><Link to="/"> Home Page back btn</Link>
                    <form onSubmit={handleSubmit}>
                        <input type='name' value={name} onChange={(e) => setName(e.target.value)} />


                        <button type='submit'>Login To Dahsboard</button>

                    </form>

                </div>
            }

        </div>
    )
}

export default Login