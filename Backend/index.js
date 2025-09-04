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
import studentRouter from "./routes/studentsRoutes.js";
import testingRouter from "./routes/testingRoutes.js";

const app = express();  // 2.
const PORT = 5000
// Middleware .... 


app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json())  // ---> req.body -->undefined



// post , get, update(put,patch) , delete.


// testing

// app.get("/"   ,  )
app.use("/student" , testingRouter )

app.use("/", testingRouter);
// students 
// app.get("/students",)
// app.post("/students",)

app.use("/students",studentRouter)
app.use("/students", studentRouter);



app.listen(PORT, ()=>{// 3. 
    console.log(`Express Server is running on ${PORT}`)
    console.log(`http://localhost:${PORT}`)
    
    
const std = {id: 123, name:"Tania"}
console.log(std.id)
console.log(std["name"])
})