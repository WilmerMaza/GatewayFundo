import axios from "axios";
import { urlServeAuth } from "./ValidEnvironment";

export const authService = axios.create({
  baseURL: `${urlServeAuth}/api/auth`, // Cambia esta URL por la de tu servicio de autenticación
  headers: {
    "Content-Type": "application/json",
  },
});
