import { NextRequest, NextResponse } from "next/server";
import { generateAiContent } from "@/lib/gemini";
import { GenerateSummary } from "@/types/ai.types";
import { ApiResponse } from "@/types/api.types";


export async function POST(req:NextRequest){
  try{

    const body:GenerateSummary = await req.json()
    const {expirienceLevel,skills,jobTitle} = body;

    if(!expirienceLevel || !skills || !jobTitle){
        return NextResponse.json<ApiResponse<null>>({
            success:false,
            message:"All fields are required"
        },{status:400})
    }

    const prompt = `Generate a resume summary for a ${expirienceLevel} ${jobTitle} with skills: ${skills.join(", ")}`

    const summary = await generateAiContent(prompt)

    return NextResponse.json<ApiResponse<string>>({
        success:true,
        message:"Summary generated successfully",
        data:summary
    },{status:200})

  } catch(err){
     console.log("Error in summary generation",err)
     return NextResponse.json<ApiResponse<null>>({
        success:false,
        message:"Error in summary generation",
     },{status:500})
  }
}