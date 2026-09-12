import { getCurrentUser } from "@/lib/getCureentUser";
import connectDB from "@/lib/mongodb";
import ResumeModel from "@/models/resume.model";
import { ApiResponse } from "@/types/api.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try{
    connectDB();

    const user = await getCurrentUser(req);
    
    if (!user) {
        return NextResponse.json<ApiResponse<null>>({
            success: false,
            message: "Unauthorized",
        }, { status: 401 });
    }

    const newResume = await ResumeModel.create({
        user_Id: user._id,
        title:'',
        personalInformation:{
            fullname:'',
            email:'',
            mobile:'',
            location:'',
            github:'',
            linkedIn:'',
            portfolio:''
        },
        summary:'',
        skills:[],
        workExperience:[],
        projects:[],
        education:[],
        certifications:[]
    })

    return NextResponse.json<ApiResponse<null>>({
        success:true,
        message:"resume created successfully..",
        data:newResume
    },{status:201})

    }catch(err){
     console.log("Error in resume creation",err)
     return NextResponse.json<ApiResponse<null>>({
        success:false,
        message:"Error in resume creation",
        error:JSON.stringify(err)
     },{status:500})
    }
}
