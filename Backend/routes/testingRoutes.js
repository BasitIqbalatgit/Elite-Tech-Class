import express from "express";
import { checkingBackend, TaniaInfor } from "../controllers/testingController.js";
const router  = express.Router();


router.get("/", checkingBackend)
router.get("/tania",TaniaInfor);


export default router;
