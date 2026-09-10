import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { LoginBody } from "@/types/user.types";
import { ApiResponse } from "@/types/api.types";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "@/lib/jwt";


export async function POST(req:NextRequest){
    try{
    connectDB()

    const body:LoginBody = await req.json()
    const {email,password} = body;

    if(!email || !password){
        return NextResponse.json<ApiResponse<null>>({
            success:false,
            message:"All fields are required"
        },{status:400})
    }

    const isUserExist = await User.findOne({email})    
    if(!isUserExist){
        return NextResponse.json<ApiResponse<null>>({
            success:false,
            message:"User doesn't exists"
        },{status:404})
    }

    const isPasswordValid = await isUserExist.comparePassword(password)
    if(!isPasswordValid){
        return NextResponse.json<ApiResponse<null>>({
            success:false,
            message:"Invalid password"
        },{status:401})
    }

    
    const token = generateToken({userId:isUserExist._id.toString(),email:isUserExist.email})

    const response = NextResponse.json<ApiResponse<null>>({
        success:true,
        message:"Logged in successfully",
    },{status:200})

    response.cookies.set("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        path:"/",
        maxAge:60*60*24*7
    })

    return response;

  } catch(err){
     console.log(err,"Login Error")
     return NextResponse.json<ApiResponse<null>>({
        success:false,
        message:"Error in user login",
     },{status:500})
  }
}

