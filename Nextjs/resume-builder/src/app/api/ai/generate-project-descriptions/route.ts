import { NextRequest, NextResponse } from "next/server";
import { generateAiContent } from "@/lib/gemini";
import { GenerateProjectDescription } from "@/types/ai.types";
import { ApiResponse } from "@/types/api.types";

export async function POST(req: NextRequest) {
  try {
    const body: GenerateProjectDescription = await req.json();
    const { projectName, skills, descriptionContext } = body;

    if (!projectName || !descriptionContext) {
        return NextResponse.json<ApiResponse<null>>({
            success: false,
            message: "Project name and context are required"
        }, { status: 400 });
    }

   const prompt = `
Generate a professional and ATS-optimized project description for a resume based on the following details:

- Project Name: ${projectName}
- Used Skills/Technologies: ${skills ? skills.join(", ") : "Not specified"}
- Basic Context/Description: ${descriptionContext}

Follow these requirements:
1. Write 3 to 4 bullet points describing the project.
2. Make it professional, concise, and impactful.
3. Use the XYZ formula where possible (Accomplished [X] as measured by [Y], by doing [Z]).
4. Start each bullet point with a strong action verb (e.g., Developed, Designed, Implemented).
5. Naturally include the provided skills and technologies.
6. Do not include any introductory text or labels. Only output the bullet points.
7. Separate each bullet point with a newline character.
`;
   const description = await generateAiContent(prompt);

    return NextResponse.json<ApiResponse<string>>({
        success: true,
        message: "Project description generated successfully",
        data: description
    }, { status: 200 });

  } catch(err) {
     console.log("Error in project description generation", err);
     return NextResponse.json<ApiResponse<null>>({
        success: false,
        message: "Error in project description generation",
     }, { status: 500 });
  }
}
