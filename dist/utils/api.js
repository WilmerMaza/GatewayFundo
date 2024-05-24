"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSSE = exports.cronometerService = exports.registerService = exports.authService = void 0;
const axios_1 = __importDefault(require("axios"));
const ValidEnvironment_1 = require("./ValidEnvironment");
exports.authService = axios_1.default.create({
    baseURL: `${ValidEnvironment_1.urlServeAuth}/api/auth`, // Cambia esta URL por la de tu servicio de autenticación
    headers: {
        "Content-Type": "application/json",
    },
});
exports.registerService = axios_1.default.create({
    baseURL: `${ValidEnvironment_1.urlServeRegister}/`, // Cambia esta URL por la de tu servicio de autenticación
    headers: {
        "Content-Type": "application/json",
    },
});
exports.cronometerService = axios_1.default.create({
    baseURL: `${ValidEnvironment_1.urlServeCronometer}/cronometro`, // Cambia esta URL por la de tu servicio de autenticación
    headers: {
        "Content-Type": "application/json",
    },
});
function getSSE(path, config) {
    const sseConfig = {
        ...config,
        headers: {
            ...config.headers,
            Accept: "text/event-stream",
        },
        responseType: "stream", // Importante para manejar la respuesta como un stream
    };
    return exports.cronometerService.get(path, sseConfig);
}
exports.getSSE = getSSE;
//# sourceMappingURL=api.js.map