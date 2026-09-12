import connectDB from "@/lib/mongodb";
import { NextRequest } from "next/server";

async function POST(req:NextRequest) {
    try{
    connectDB();

    

    }catch(err){
     console.log("Error in user registration",err)
    }
}

