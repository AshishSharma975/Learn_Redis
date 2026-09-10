import connectDB from "@/lib/mongodb"
import User from "@/models/user.model"
import { ApiResponse } from "@/types/api.types";
import { RegisterBody } from "@/types/user.types";
import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server";
import { generateToken } from "@/lib/jwt";




export async function POST(req:NextRequest){
    
  try{
    connectDB()

    const body:RegisterBody = await req.json()
    const {name,email,password,mobile} = body;

    if(!name || !email || !password){
        return NextResponse.json<ApiResponse<null>>({
            success:false,
            message:"All fields are required"
        },{status:400})
    }

    const isExistingUser = await User.findOne({email})
    if(isExistingUser){
        return NextResponse.json<ApiResponse<null>>({
            success:false,
            message:"User already exists"
        },{status:409})
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const user = await User.create({name,email,password:hashedPassword,mobile})

    const token = generateToken({userId:user._id.toString(),email:user.email})

    const response = NextResponse.json<ApiResponse<any>>({
        success:true,
        message:"User created successfully",
        data: {
            id: user._id,
            name: user.name,
            email: user.email
        }   
    },{status:201})

    response.cookies.set("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        path:"/",
        maxAge:60*60*24*7
    })

    return response;

  } catch(err){
     console.log(err,"Registration Error")
     return NextResponse.json<ApiResponse<null>>({
        success:false,
        message:"Error in user registration",
     },{status:500})
  }

}

