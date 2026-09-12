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

   const prompt = `
Generate a professional and ATS-optimized resume summary based on the following details:

- Experience Level: ${expirienceLevel}
- Job Title: ${jobTitle}
- Skills: ${skills.join(", ")}

Follow these requirements:

1. Write only the resume summary. Do not generate any other section of the resume.
2. Keep the summary strictly between 50 and 80 words.
3. Make it professional, concise, impactful, and suitable for a modern resume.
4. Tailor the summary specifically to the given job title and experience level.
5. Naturally include relevant skills and industry-specific ATS keywords.
6. Highlight the candidate's technical expertise, core strengths, and professional value.
7. Focus on what the candidate can contribute to the target role.
8. Use strong and professional action-oriented language where appropriate.
9. Avoid first-person pronouns such as "I", "me", "my", or "we".
10. Avoid generic, repetitive, exaggerated, or irrelevant statements.
11. Do not add headings, bullet points, labels, explanations, or quotes.
12. Do not mention skills that are not provided in the input.
13. Ensure the final summary is grammatically correct and easy to read.
14. The output must contain ONLY the final 50-80 word resume summary.
`;
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
