"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const index_1 = __importDefault(require("./routes/index"));
const swaggerConfig_1 = __importDefault(require("./swaggerConfig"));
const ValidEnvironment_1 = require("./utils/ValidEnvironment");
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json()); // Para parsear application/json
// Swagger Documentation Route
app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerConfig_1.default));
// API Routes
app.use(index_1.default);
// Error Handling Middleware
app.use(errorHandler_1.default);
// Iniciar el servidor
app.listen(ValidEnvironment_1.PORT, () => {
    console.log(`API Gateway listening at http://localhost:${ValidEnvironment_1.PORT}`);
    console.log(`Swagger UI available at http://localhost:${ValidEnvironment_1.PORT}/swagger`);
});
//# sourceMappingURL=index.js.map