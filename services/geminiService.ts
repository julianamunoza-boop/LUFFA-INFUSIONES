
import { GoogleGenAI } from "@google/genai";

export class SalesAdvisorService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getAdvice(prompt: string, language: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: `You are the Luxury Concierge for @oro.a.oro, a premium Colombian brand. 
          You speak in ${language}. 
          Your tone is elegant, warm, and expert. 
          You know everything about:
          - Luffa luxury slippers (ergonomic, podiatry-focused, handmade by women in Antioquia).
          - Fruit infusions (hibiscus, butterfly pea, high-standard dehydration, no sugar).
          - Sustainability (seed-paper packaging, chemical-free).
          - Market: Canada luxury hospitality and retail.
          - Social impact: Empowering women heads of household in Colombia.
          Be brief and helpful.`,
          temperature: 0.7,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm sorry, I'm currently unable to assist. Please try again later.";
    }
  }
}
