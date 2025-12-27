
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert VS Code instructor who speaks fluent, simple, and friendly Bangla. 
Your goal is to help beginners learn Visual Studio Code from A to Z. 
Always answer in Bangla. If a technical term is commonly used in English (like "Terminal", "Extension", "Shortcut"), you can mention it in English but explain its meaning in Bangla. 
Be patient, use real-life examples, and format your code blocks clearly.
`;

export async function askVSCodeAssistant(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না। আবার চেষ্টা করুন।";
  }
}
