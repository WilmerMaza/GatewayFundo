// src/routes/authRoutes.ts
import { Request, Response, Router } from "express";
import handleAxiosError from "../middleware/handleAxiosError";
import { authService } from "../utils/api";

const router = Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     UserEntity:
 *       type: object
 *       required:
 *         - document
 *         - name
 *       properties:
 *         document:
 *           type: string
 *           description: Documento de identificación del usuario
 *           example: "123456789"
 *         name:
 *           type: string
 *           description: Nombre del usuario
 *           example: "Juan Pérez"
 *
 *     MovilJuez:
 *       type: object
 *       required:
 *         - jueces
 *       properties:
 *         jueces:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/UserEntity'
 *       example:
 *        
 *           - document: "987654321"
 *             name: "Ana Gómez"
 *
 *     HallRequest:
 *       type: object
 *       required:
 *         - RegistrationPlatform
 *         - mobile
 *         - chronometer
 *       properties:
 *         RegistrationPlatform:
 *           $ref: '#/components/schemas/UserEntity'
 *         mobile:
 *           $ref: '#/components/schemas/MovilJuez'
 *         chronometer:
 *           $ref: '#/components/schemas/UserEntity'
 *       example:
 *         RegistrationPlatform:
 *           document: "123456789"
 *           name: "Juan Pérez"
 *         mobile:
 *        
 *             - document: "4584424321"
 *               name: "Sergio Perez"
 *             - document: "3751512321"
 *               name: "Andres Parra"
 *             - document: "8847654321"
 *               name: "Ana Gómez"
 *         chronometer:
 *           document: "1112131415"
 *           name: "Carlos Ruiz"
 */

/**
 * @openapi
 * /auth/register:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Crear una nueva competición deportiva
 *     description: Crea una nueva competición deportiva con los jueces, plataforma de registro y cronómetro.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HallRequest'
 *     responses:
 *       201:
 *         description: Competición creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación
 *                   example: 'Hall registered successfully: XXXXXX"'
 *       400:
 *         description: Error en la validación de entrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje describiendo el error en la entrada
 *                   example: 'Datos de entrada no válidos'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje describiendo el error interno
 *                   example: 'Error interno del servidor'
 */
router.post("/register", async (req: Request, res: Response) => {
  try {
    const response = await authService.post("/register", req.body);
    res.json(response.data);
  } catch (error: any) {
    handleAxiosError(error, req, res);
  }
});
/**
 * @openapi
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - hall
 *         - platform
 *         - documento
 *       properties:
 *         hall:
 *           type: string
 *           description: Código de la sala
 *           example: "R0JJV4"
 *         platform:
 *           type: string
 *           description: Plataforma de acceso (ej. chronometer)
 *           example: "chronometer"
 *         documento:
 *           type: string
 *           description: Documento de identificación del usuario
 *           example: "1112131415"
 * 
 *     LoginResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Mensaje de confirmación
 *           example: "Login successful"
 *         token:
 *           type: string
 *           description: Token de autenticación
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 */

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Iniciar sesión
 *     description: Inicia sesión con el código de sala, plataforma y documento de identificación.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: Error en la solicitud de inicio de sesión
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Datos de inicio de sesión no válidos"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error interno
 *                   example: "Error interno del servidor"
 */

router.post("/login", async (req: Request, res: Response) => {
  try {
    const response = await authService.post("/login", req.body);
    res.json(response.data);
  } catch (error: any) {
    handleAxiosError(error, req, res);
  }
});

export default router;
