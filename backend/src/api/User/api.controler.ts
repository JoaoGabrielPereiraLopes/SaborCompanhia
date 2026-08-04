import e, { Request, Response } from "express";
import db from "../../middlewares/DatabaseConection"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const apiGetUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const [rows] = await db.query("SELECT id,Created_at,Name,Email,Password,Admin FROM Users LIMIT 100;");
        return res.status(200).json({ 
            message:"Get sucessfully", 
            data:rows,
            success:true
        });
    }catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal Error",
            success:false
        });
    }
};
const apiCreateUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const {Password,PasswordConfirm,Name,Email}=req.body
        if(!Password || !PasswordConfirm || !Name || !Email){
            return res.status(400).json({ 
                message:"Data is missing",
                success:false
            })
        }
        else if(Password!==PasswordConfirm){
            return res.status(400).json({ 
                message:"Passwords don't match",
                success:false

            })
        }
        const [rows] = await db.execute<any[]>(
            "SELECT id FROM Users WHERE Email = ? LIMIT 1",
            [Email]
        );
        if(rows.length){
            return res.status(400).json({ 
                message:"Email is already registered",
                success:false
            })
        }
        const passwordHash = await bcrypt.hash(Password, 10);
        const [result] = await db.execute<any[]>(
            `
            INSERT INTO Users (Name, Email, Password, Admin)
            VALUES (?, ?, ?, ?);
            `,[Name,Email,passwordHash,0]
        );
        return res.status(201).json({ 
            message:"Sing Up sucessfully",
            success:true
        })
    }
    catch(e){
        console.error(e);
        return res.status(500).json({
            message: "Internal Error",
            success:false
        });
    }
}
const apiLoginUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const {Password,Email}=req.body

        if(!Password||!Email){
            return res.status(400).json({
                message: "Data is missing",
                success:true
            })
        }
        
        const [rows] = await db.execute<any[]>(
            "SELECT Password,Admin,id,Name FROM Users WHERE Email = ?;",
            [Email]
        );
        
        if(!rows.length){
            return res.status(400).json({
                message:"Email not found",
                sucess:false
            })
        }
        
        const passwordMatch = await bcrypt.compare(
            Password,
            rows[0].Password
        );
        
        if(!passwordMatch){
            return res.status(400).json({
                message:"Incorrect credentials",
                sucess:false
            })
        }
        const token = jwt.sign(
            {
                id: rows[0].id,
                admin: rows[0].Admin==1
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d"
            }
            
        )
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.status(200).json({
            message: "Login successful",
            data:{
                id: rows[0].id,
                admin: rows[0].Admin==1,
                Name: rows[0].Name
            }
        })
    }catch(e){
        console.error(e);
        return res.status(500).json({
            message: "Internal Error",
            success:false
        })

    }
}
export {apiGetUser,apiCreateUser,apiLoginUser};