import axios from "axios";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export async function fetchTransport() {
  try {
    const response = await axios.get(apiUrl + "transport");
    return response.data;
  } catch (e) {
    console.error(e);
  }
}
