"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const axios_1 = __importDefault(require("axios"));
const ValidEnvironment_1 = require("./ValidEnvironment");
exports.authService = axios_1.default.create({
    baseURL: `${ValidEnvironment_1.urlServeAuth}/api/auth`, // Cambia esta URL por la de tu servicio de autenticación
    headers: {
        "Content-Type": "application/json",
    },
});
//# sourceMappingURL=api.js.map