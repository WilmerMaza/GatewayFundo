// src/swaggerConfig.ts
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Gateway Fundo',
        version: '1.0.0',
        description: 'This is a simple API Gateway',
    },
    servers: [
        {
            url: 'https://gateway.micovid.online',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Make sure these paths are pointing to the files where your API documentation comments exist.
    apis: ['src/routes/*.ts', 'src/controllers/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
