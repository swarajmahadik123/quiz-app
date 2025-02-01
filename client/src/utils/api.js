import axios from "axios";

// Use an alternative proxy URL
const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";

// Your original API endpoint
const API_URL = "https://api.jsonserve.com/Uw5CrX";

// Combine the proxy with the API URL
const FULL_URL = `${PROXY_URL}${API_URL}`;

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(FULL_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    throw error;
  }
};
