import axios, { AxiosInstance, AxiosResponse } from "axios";
import { urlServeAuth, urlServeCronometer, urlServeRegister } from "./ValidEnvironment";

export const authService: AxiosInstance = axios.create({
  baseURL: `${urlServeAuth}/api/auth`, // Cambia esta URL por la de tu servicio de autenticación
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerService: AxiosInstance = axios.create({
  baseURL: `${urlServeRegister}/`, // Cambia esta URL por la de tu servicio de autenticación
  headers: {
    "Content-Type": "application/json",
  },
});

export const cronometerService: AxiosInstance = axios.create({
  baseURL: `${urlServeCronometer}/cronometro`, // Cambia esta URL por la de tu servicio de autenticación
  headers: {
    "Content-Type": "application/json",
  },
});

export function getSSE(path: string, config: any): Promise<AxiosResponse<any, any>> {
  const sseConfig = {
    ...config,
    headers: {
      ...config.headers,
      Accept: "text/event-stream",
    },
    responseType: "stream", // Importante para manejar la respuesta como un stream
  };
  return cronometerService.get(path, sseConfig);
}
