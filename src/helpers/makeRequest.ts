import axios, { type AxiosRequestConfig } from "axios";
import { Request } from "@/types/TypeStore";

export const makeRequest = async (request: Request) => {
  const endpointInfo = request.endpoint;

  const config: AxiosRequestConfig = {
    params: request.params,
    ...request.body
  }

  try {    
    const response = await axios[endpointInfo.method](endpointInfo.uri(), config)

    return response.data
  } catch (error) {
    throw error
  }

};
