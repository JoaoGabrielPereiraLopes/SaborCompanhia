import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
    id: number;
    admin: boolean;
    iat: number;
    exp: number;
}

const cookieChecker = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const token = req.cookies.token;

        if (!token) {
            res.status(401).json({
                message: "you aren't logged"
            });
            return;
        }

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as UserPayload;

        req.user = payload; 
        console.log(token)
        next();

    } catch {
        res.status(401).json({
            message: "Invalid or expired token"
        });
        return
    }
};
const isAdmin=(
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    if(!req.user?.admin){
        res.status(401).json({
            message: "You don't have permission"
        })
        return
    }
    next()
}
export {cookieChecker,isAdmin}