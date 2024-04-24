"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Función de manejo de errores
function handleAxiosError(error, _req, res) {
    if (axios_1.default.isAxiosError(error)) {
        if (error.response) {
            // Reenvía la respuesta de error del servicio de autenticación
            res.status(error.response.status).send(error.response.data);
        }
        else if (error.request) {
            // No se recibió respuesta del servicio llamado
            res.status(503).json({
                message: "Service Unavailable",
                details: "No response received from the authentication service",
            });
        }
        else {
            // Error en la configuración de la petición o un error de red
            res.status(500).json({
                message: "Internal Server Error",
                details: error.message,
            });
        }
    }
    else {
        // Error no relacionado con Axios
        res.status(500).json({
            message: "Internal Server Error",
            details: "An unexpected error occurred",
        });
    }
}
exports.default = handleAxiosError;
//# sourceMappingURL=handleAxiosError.js.map