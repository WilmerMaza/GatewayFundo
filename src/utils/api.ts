import axios, { AxiosInstance, AxiosResponse } from "axios";
import { urlServeAuth, urlServeCronometer, urlServeRegister, urlServerPuntuaciones } from "./ValidEnvironment";

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

export const puntuacionesService: AxiosInstance = axios.create({
  baseURL: `${urlServerPuntuaciones}/`, // Cambia esta URL por la de tu servicio de autenticación
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


export const sseConfig: any = {
  headers: {
    Accept: "text/event-stream",
  },
  responseType: "stream", // Importante para manejar la respuesta como un strea
}

export function getSSECronometro(path: string): Promise<AxiosResponse<any, any>> {
  return cronometerService.get(path, sseConfig);
}


export function getSSEPuntuaciones(path: string): Promise<AxiosResponse<any, any>> {
  return puntuacionesService.get(path, sseConfig);
}