import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "./jwt";
import User from "@/models/user.model";



export async function getCurrentUser(req:NextRequest) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    try{
        if(!token){
            return null;
        }

        const decode = verifyToken(token)
        if(!decode) return null;

        const user = await User.findById(decode.userId)

        return user;
    }catch(err){
        console.log("Error in get current user",err)
        return null;
    }

}