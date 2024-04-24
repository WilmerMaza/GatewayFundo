import axios from "axios";
import { Request, Response } from "express";

// Función de manejo de errores
function handleAxiosError(error: unknown, _req: Request, res: Response): void {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // Reenvía la respuesta de error del servicio de autenticación
      res.status(error.response.status).send(error.response.data);
    } else if (error.request) {
      // No se recibió respuesta del servicio llamado
      res.status(503).json({
        message: "Service Unavailable",
        details: "No response received from the authentication service",
      });
    } else {
      // Error en la configuración de la petición o un error de red
      res.status(500).json({
        message: "Internal Server Error",
        details: error.message,
      });
    }
  } else {
    // Error no relacionado con Axios
    res.status(500).json({
      message: "Internal Server Error",
      details: "An unexpected error occurred",
    });
  }
}

export default handleAxiosError;
