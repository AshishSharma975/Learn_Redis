import { NextRequest, NextResponse } from "next/server";
import { generateAiContent } from "@/lib/gemini";
import { GenerateExperienceDescription } from "@/types/ai.types";
import { ApiResponse } from "@/types/api.types";

export async function POST(req: NextRequest) {
  try {
    const body: GenerateExperienceDescription = await req.json();
    const { jobTitle, companyName, skills, descriptionContext } = body;

    if (!jobTitle || !companyName || !descriptionContext) {
        return NextResponse.json<ApiResponse<null>>({
            success: false,
            message: "Job title, company name, and context are required"
        }, { status: 400 });
    }

   const prompt = `
Generate professional and ATS-optimized work experience descriptions for a resume based on the following details:

- Job Title: ${jobTitle}
- Company Name: ${companyName}
- Used Skills/Technologies: ${skills ? skills.join(", ") : "Not specified"}
- Basic Context/Description: ${descriptionContext}

Follow these requirements:
1. Write 3 to 4 bullet points describing the work experience.
2. Make it professional, concise, and impactful.
3. Use the XYZ formula where possible (Accomplished [X] as measured by [Y], by doing [Z]).
4. Start each bullet point with a strong action verb (e.g., Developed, Managed, Spearheaded).
5. Naturally include the provided skills and technologies.
6. Do not include any introductory text or labels. Only output the bullet points.
7. Separate each bullet point with a newline character.
`;
   const description = await generateAiContent(prompt);

    if (!description) {
        return NextResponse.json<ApiResponse<null>>({
            success: false,
            message: "Failed to generate experience description from AI"
        }, { status: 500 });
    }

    return NextResponse.json<ApiResponse<string>>({
        success: true,
        message: "Experience description generated successfully",
        data: description
    }, { status: 200 });

  } catch(err) {
     console.log("Error in experience description generation", err);
     return NextResponse.json<ApiResponse<null>>({
        success: false,
        message: "Error in experience description generation",
     }, { status: 500 });
  }
}
