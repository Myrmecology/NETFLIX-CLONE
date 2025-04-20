import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
  try {
    // Add the API key as a query parameter
    const apiUrl = `${url}${url.includes('?') ? '&' : '?'}api_key=${ENV_VARS.TMDB_API_KEY}`;
    
    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error("Failed to fetch data from TMDB: " + response.statusText);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching from TMDB:", error.message);
    throw error;
  }
};

