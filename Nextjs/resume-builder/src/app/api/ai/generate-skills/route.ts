import { NextRequest, NextResponse } from "next/server";
import { generateAiContent } from "@/lib/gemini";
import { GenerateSkills } from "@/types/ai.types";
import { ApiResponse } from "@/types/api.types";

export async function POST(req: NextRequest) {
  try {
    const body: GenerateSkills = await req.json();
    const { expirienceLevel, jobTitle } = body;

    if (!expirienceLevel || !jobTitle) {
        return NextResponse.json<ApiResponse<null>>({
            success: false,
            message: "All fields are required"
        }, { status: 400 });
    }

   const prompt = `
Generate a list of professional and ATS-optimized skills for a resume based on the following details:

- Experience Level: ${expirienceLevel}
- Job Title: ${jobTitle}

Follow these requirements:
1. Generate only a comma-separated list of 10 to 15 relevant skills.
2. Include a mix of hard (technical) and soft skills appropriate for the role.
3. Do not include any bullet points, numbers, or introductory text.
4. The output must contain ONLY the comma-separated list of skills.
`;
   const skillsContent = await generateAiContent(prompt);

    if (!skillsContent) {
        return NextResponse.json<ApiResponse<null>>({
            success: false,
            message: "Failed to generate skills content from AI"
        }, { status: 500 });
    }

    // Convert the comma-separated string to an array
    const skillsArray = skillsContent.split(',').map(skill => skill.trim()).filter(Boolean);

    // Assuming ApiResponse can accept array of strings for skills
    return NextResponse.json<ApiResponse<any>>({
        success: true,
        message: "Skills generated successfully",
        data: skillsArray
    }, { status: 200 });

  } catch(err) {
     console.log("Error in skills generation", err);
     return NextResponse.json<ApiResponse<null>>({
        success: false,
        message: "Error in skills generation",
     }, { status: 500 });
  }
}
