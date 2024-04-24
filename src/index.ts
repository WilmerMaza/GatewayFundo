import express from "express";
import swaggerUi from "swagger-ui-express";
import errorHandler from "./middleware/errorHandler";
import router from "./routes/index";
import swaggerSpec from "./swaggerConfig";
import { PORT } from "./utils/ValidEnvironment";

const app = express();

// Middlewares
app.use(express.json()); // Para parsear application/json

// Swagger Documentation Route
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Routes
app.use(router);

// Error Handling Middleware
app.use(errorHandler);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`API Gateway listening at http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/swagger`);
});
