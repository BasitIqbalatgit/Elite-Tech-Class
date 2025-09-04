import students from "../dummy Data/students.js";

export const addStudent =  (req,res)=>{
    const {id, name, regNO} = req.body;
    students.push({id,name, regNO})
    res.status(200).json({id,name,regNO})
}


export const getAllStudent = (req,res)=>{
    console.log("helo iam n the getAll students")
    res.json({status: 200, students})

}

