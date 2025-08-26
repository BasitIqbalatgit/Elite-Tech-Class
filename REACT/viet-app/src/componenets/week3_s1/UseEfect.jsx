import React, { useEffect, useState } from 'react'
import "./UseEfect.css"
function UseEfect() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        async function fectchData() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const d = await response.json();

                setData(d)
                console.log(d)

            } catch (e) {
                console.log(e)
            }
        }

        // fectchData()

        setTimeout(() => {
            fectchData()
            if (data) {
                setLoading(false)
            }
        }, 3000)

    }, [])

    // mount --> render 
    //update --> depdening -> 
    return (
        <div id='container'>

            {
                loading ? (<p>Loading the data from backend</p>) : data.map(element => (
                    <div className='card' key={element.id}>
                        <h1>id : {element.id}</h1>
                        <p>Title: {element.title}</p>
                        <p>completed: {element.completed}</p>
                    </div>
                ))
            }


        </div>

    )
}

export default UseEfect