import React from 'react'

const Animate = ({ shape, color }) => {

    return (
        <div style={{ fontSize: "2rem", width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
            {
                shape === "square" ? <div style={{ width: "200px", height: "200px", backgroundColor: color }}
                >

                </div> : shape === "circle" ? <div style={{ width: "200px", height: "200px", backgroundColor: color, borderRadius:"100%" }}
                >

                </div>:null

        }

        </div>
    )
}

export default Animate