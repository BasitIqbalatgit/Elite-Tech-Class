


export const checkingBackend= (req,res)=>{
    res.send(`Backend Server is running on port : ${PORT}`)
}


export const TaniaInfor = (req,res)=>{
    res.json({"id":1, name:"Tania"})
}