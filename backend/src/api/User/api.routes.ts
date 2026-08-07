import { Request,Response } from "express";
import { Router } from "express";
import {apiGetUser,apiCreateUser,apiLoginUser,apiGetUserById} from "./api.controler"
import { cookieChecker,isAdmin } from "../../middlewares/TokenChecker";
const router = Router();
router.get("/", apiGetUser );
router.post("/", apiCreateUser);
router.put("/login", apiLoginUser);
router.put("/auth",cookieChecker,(req:Request,res:Response)=>{return res.status(200).json({message:"authorization sucessful"})})
router.put("/authAdmin",cookieChecker,isAdmin,(req:Request,res:Response)=>{
    console.log("chegou")
    return res.status(200).json({message:"authorization sucessful"})
})
router.get("/me", cookieChecker, apiGetUserById);
export { router };
