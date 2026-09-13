import { NextRequest, NextResponse } from "next/server";
import { generateAiContent } from "@/lib/gemini";
import { ImproveContent } from "@/types/ai.types";
import { ApiResponse } from "@/types/api.types";

export async function POST(req: NextRequest) {
  try {
    const body: ImproveContent = await req.json();
    const { content, contentType = "general" } = body;

    if (!content) {
        return NextResponse.json<ApiResponse<null>>({
            success: false,
            message: "Content is required to improve"
        }, { status: 400 });
    }

   const prompt = `
Please improve the following text for a professional resume.
Context of the text: ${contentType}

Original text:
"""
${content}
"""

Requirements:
1. Make it more professional, concise, and impactful.
2. Fix any grammar or spelling mistakes.
3. Optimize for ATS (Applicant Tracking Systems) using strong action verbs where appropriate.
4. Keep the core meaning the same, just enhance the wording.
5. Only return the improved text, do not include any introductory phrases, explanations, or quotes.
`;
   const improvedText = await generateAiContent(prompt);

    if (!improvedText) {
        return NextResponse.json<ApiResponse<null>>({
            success: false,
            message: "Failed to improve content from AI"
        }, { status: 500 });
    }

    return NextResponse.json<ApiResponse<string>>({
        success: true,
        message: "Content improved successfully",
        data: improvedText
    }, { status: 200 });

  } catch(err) {
     console.log("Error in improving content", err);
     return NextResponse.json<ApiResponse<null>>({
        success: false,
        message: "Error in improving content",
     }, { status: 500 });
  }
}
