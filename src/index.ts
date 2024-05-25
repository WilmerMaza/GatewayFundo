import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import errorHandler from "./middleware/errorHandler";
import router from "./routes/index";
import swaggerSpec from "./swaggerConfig";
import { PORT } from "./utils/ValidEnvironment";

const app = express();

const allowedOrigins = ["http://tu-api-gateway.com","*"];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin!)) {
      callback(null, true);
    } else if (allowedOrigins.includes("*")) {
      // Permitir todas las solicitudes si el origen es '*'
      callback(null, true);
    } else {
      callback(new Error("Acceso no permitido por CORS"));
    }
  },
};

app.use(cors(corsOptions));

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
