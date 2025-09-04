// type of middlesware:
//1 . Application  --> app.use() 
//2 . third party  ---> morgan , pssport ,helmet, cors (cross origin)
//3 . custome ---> authencation, rate limiting,caching.
//4 . builtin --> express.json(), express.urlencoded()
// 5. error handling --> err , req, res , next
// 6. route level  --> express.Router.



import express from "express";
import {addStudent, getAllStudent} from "../controllers/studentController.js"
const router = express.Router();

// request from index.js we wil send them to controllers.....

router.get("/",getAllStudent)
router.post("/", addStudent)

//

export default router;
