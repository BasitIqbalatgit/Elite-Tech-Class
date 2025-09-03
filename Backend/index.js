// import https from "https"; // ES+6 --> import --> new and used industry.
// // const app = require("http"); // old --> codebase (repos) --->ES+6 
// const server = https.createServer((req,res)=>{
// res.writeHead(200, {"Content-Type": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"});
// res.end(
//     `html>
//     <head>
//         <title>First Web Site </title>
//     </head>
//     <body>
//         <h1>Hello from Node.js</h1>
//         <p>i am here to learn</p>
//         <h3>Full Stack Dev </h3>
//     </body>
//     </html>
//     ` 
// )
// })
// server.listen(5000,()=>{
//     console.log("Server is runing at port 5000")
// })


import express from "express" // 1.
import cors from "cors";
const app = express();  // 2.
const PORT = 5000
// Middleware .... 


app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json())  // ---> req.body -->undefined

let students= [
    {id: 1 , name:"BASIT" , regNO: "FA21-BSE-050" },
    {id: 2, name: "Shafqat", regNO: "FA21-BCS-010"},
    {id: 3, name: "Fayaz", regNO: "FA27-BSE-030"},
    {id: 4, name: "Rabail", regNO: "FA22-BSE-055"},
    {id: 5, name: "Areeba", regNO: "FA24-BSE-058"},
    {id: 6, name: "Tania", regNO: "FA24-BSE-020"},
]

// post , get, update(put,patch) , delete.

app.get("/"   ,   (req,res)=>{
    res.send(`Backend Server is running on port : ${PORT}`)
})
app.get("/shafqat" ,  (req,res)=>{
    res.json({"id":1, name:"Shafqat"})
})


app.get("/students",(req,res)=>{
    res.json({status: 200, students})
})

app.post("/students",(req,res)=>{
    const {id, name, regNO} = req.body;
    students.push({id,name, regNO})
    res.status(200).json({id,name,regNO})
})


app.listen(PORT, ()=>{// 3. 
    console.log(`Express Server is running on ${PORT}`)
    console.log(`http://localhost:${PORT}`)
    console.log(students)
    
const std = {id: 123, name:"Tania"}
console.log(std.id)
console.log(std["name"])
})