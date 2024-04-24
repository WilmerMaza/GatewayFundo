"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/swaggerConfig.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Gateway Fundo',
        version: '1.0.0',
        description: 'This is a simple API Gateway',
    },
    servers: [
        {
            url: 'http://localhost:3000',
        },
    ],
};
const options = {
    swaggerDefinition,
    // Make sure these paths are pointing to the files where your API documentation comments exist.
    apis: ['src/routes/*.ts', 'src/controllers/*.ts'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swaggerConfig.js.map