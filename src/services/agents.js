import axios from "axios";

export async function Agent(message) {
  console.log(message);
  try {
    const response = await axios.post("http://127.0.0.1:8000/user", {
      query: message,
    });

    return response.data.final_answer; // Extract the correct field
  } catch (error) {
    console.error("Error in Agent:", error);
    return "Error processing request."; // Fallback message
  }
}
