import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure your .env has GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function Gemini(movieTitle: string, combinedReviews: string[]) {
  // Use the standard model name
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  // Join reviews into a single block of text for the prompt
  const reviewsText = combinedReviews.length > 0 
    ? combinedReviews.join("\n---\n") 
    : "No reviews available.";

  const prompt = `
    Analyze the following audience reviews for the movie "${movieTitle}":
    
    REVIEWS:
    ${reviewsText}
    
    Task:
    1. Summarize the audience consensus in exactly 2 sentences.
    2. Classify sentiment strictly as: "Positive", "Mixed", or "Negative".
    3. Identify one specific "Key Highlight" mentioned by reviewers.

    Return ONLY a valid JSON object in this format:
    {
      "summary": "string",
      "sentiment": "Positive" | "Mixed" | "Negative",
      "highlight": "string"
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response =  result.response;
    const text = response.text();
    
    
    const cleanJson = text.replace(/```json|```/g, "").trim();
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("Gemini Error Details:", error);
    // Return a safe fallback so your UI doesn't break
    return {
      summary: "AI summary is currently unavailable for this title.",
      sentiment: "Mixed",
      highlight: "Check back later for AI insights."
    };
  }
}