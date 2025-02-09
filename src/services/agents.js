import axios from "axios";

export async function Agent(message) {
  console.log(message);
  const urlBack = import.meta.env.VITE_BACKEND_URL;
  try {
    const response = await axios.post(urlBack, {
      query: message,
    });

    return response.data.final_answer; // Extract the correct field
  } catch (error) {
    console.error("Error in Agent:", error);
    return "Error processing request."; // Fallback message
  }
}
