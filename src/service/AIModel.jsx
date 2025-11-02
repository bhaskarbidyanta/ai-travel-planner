import {GoogleGenerativeAI} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
if (!apiKey) {
    throw new Error("Gemini API Key is missing or empty.");
}

const genai = new GoogleGenerativeAI(apiKey);

const model = genai.getGenerativeModel({
    model: "gemini-2.5-pro",
});

const generationConfig = {
    temperature: 0.9,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 4096,
};

// Create a singleton chat session
export const chatSession = model.startChat({
    generationConfig,
    history: [],
});

// Function to generate travel plan
export async function generateTravelPlan(location, days, travelers, budget) {
    try {
        const prompt = `Generate a travel plan for ${location} for ${days} days for ${travelers} with a ${budget} budget. Include:
        1. Hotel options (name, address, price, rating, description)
        2. Daily itinerary with activities (place name, details, pricing, rating, travel time)
        Format the response as a clean JSON object.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return JSON.parse(response.text());
    } catch (error) {
        console.error("Error generating travel plan:", error);
        throw error;
    }
}

// Function to send message to chat
export async function sendChatMessage(message) {
    try {
        const result = await chatSession.sendMessage(message);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Error sending chat message:", error);
        throw error;
    }
}