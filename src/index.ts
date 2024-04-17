import express from 'express';
import swaggerUi from 'swagger-ui-express';
import errorHandler from './middleware/errorHandler';
import router from './routes/index';
import swaggerSpec from './swaggerConfig';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // Para parsear application/json

// Swagger Documentation Route
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Routes
app.use(router);

// Error Handling Middleware
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/swagger`);
});
