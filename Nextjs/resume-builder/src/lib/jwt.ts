import  Jwt  from "jsonwebtoken"
import { JWTPayload } from "@/types/user.types"

const generateToken = (payload:JWTPayload):string=>{
    return Jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: "5d"
    })
}

const verifyToken = (token:string):JWTPayload=>{
    return Jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
}

export {generateToken,verifyToken};   
