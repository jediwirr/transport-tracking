import { TransportType } from "@/entities/transport/model/types.d";
import axios from "axios";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export async function fetchTransport(transportType?: TransportType) {
  try {
    const filter = transportType ? `?type=${transportType}` : "";
    const response = await axios.get(apiUrl + "transport" + filter);
    return response.data;
  } catch (e) {
    console.error(e);
  }
}
