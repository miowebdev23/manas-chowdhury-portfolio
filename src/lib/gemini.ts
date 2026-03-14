import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenAI({ apiKey });

export const getGeminiResponse = async (prompt: string, systemInstruction?: string) => {
  try {
    const model = "gemini-1.5-flash"; // Using flash for speed
    const result = await genAI.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        systemInstruction: systemInstruction || "You are a helpful assistant.",
      },
    });
    return result.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to the AI.";
  }
};

export const chatWithGemini = async (history: { role: "user" | "model", parts: { text: string }[] }[], message: string, systemInstruction: string) => {
  try {
    const chat = genAI.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction,
      },
      history: history,
    });
    const result = await chat.sendMessage({ message });
    return result.text || "I'm not sure how to respond to that.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm having trouble thinking right now. Please try again later.";
  }
};
