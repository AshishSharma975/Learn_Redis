import connectDB from "@/lib/mongodb"
import User from "@/models/user.model"
import { RegisterBody } from "@/types/user.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    
  try{
    connectDB()

    const body:RegisterBody = await req.json()
    const {name,email,password,mobile} = body;

    if(!name || !email || !password){
        return NextResponse.json({
            message:"All fields are required"
        },{status:400})
    }

    console.log(body,"Request Body")

  } catch(err){
     console.log(err,"Registration Error")
  }

}